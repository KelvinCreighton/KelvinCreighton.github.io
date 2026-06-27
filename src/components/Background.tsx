"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  tint: number;
  pulse: number;
  speed: number;
  size: number;
  driftX: number;
  driftY: number;
};

type Marker = {
  x: number;
  y: number;
  tint: number;
};

type NebulaPuff = {
  dx: number;
  dy: number;
  radius: number;
  alpha: number;
  mix: number;
};

type Nebula = {
  x: number;
  y: number;
  rx: number;
  ry: number;
  angle: number;
  tintA: number;
  tintB: number;
  puffs: NebulaPuff[];
};

type Scene = {
  stars: Point[];
  markers: Marker[];
  links: Array<[number, number]>;
  nebulae: Nebula[];
};

type Palette = {
  top: string;
  bottom: string;
  starTint: string[];
  nebula: string[];
  lineColor: string;
};

const VOID_THEME: Palette = {
  top: "#05060f",
  bottom: "#0d1024",
  starTint: ["#ffffff", "#cfe0ff", "#ffe9c8"],
  nebula: ["#6b3fa0", "#2f5c8f", "#9c3f6e"],
  lineColor: "rgba(255, 255, 255, 0.2)",
};

const SETTINGS = {
  ambientCount: 240,
  minSize: 0.2,
  maxSize: 2.0,
  markerCount: 30,
  linkDistance: 0.25,
  lineOpacity: 0.2,
  nebulaCount: 3,
  nebulaOpacity: 0.5,
  puffCount: 150,
  blurPx: 15,
};

function mulberry32(seed: number) {
  let a = seed | 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexToRgba(hex: string, alpha: number) {
  const value = hex.slice(1);
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function mixColor(a: string, b: string, t: number) {
  const ah = Number.parseInt(a.slice(1), 16);
  const bh = Number.parseInt(b.slice(1), 16);
  const ar = (ah >> 16) & 255;
  const ag = (ah >> 8) & 255;
  const ab = ah & 255;
  const br = (bh >> 16) & 255;
  const bg = (bh >> 8) & 255;
  const bb = bh & 255;
  return [
    Math.round(ar + (br - ar) * t),
    Math.round(ag + (bg - ag) * t),
    Math.round(ab + (bb - ab) * t),
  ];
}

function createSeed() {
  if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
    const seed = new Uint32Array(1);
    crypto.getRandomValues(seed);
    return seed[0] || 17;
  }
  return Math.floor(Math.random() * 0xffffffff) || 17;
}

function createScene(width: number, height: number, seed: number): Scene {
  const rand = mulberry32(seed);

  const stars: Point[] = [];
  for (let i = 0; i < SETTINGS.ambientCount; i++) {
    stars.push({
      x: rand() * width,
      y: rand() * height,
      tint: Math.floor(rand() * VOID_THEME.starTint.length),
      pulse: rand() * Math.PI * 2,
      speed: 0.006 + rand() * 0.014,
      size: SETTINGS.minSize + rand() * (SETTINGS.maxSize - SETTINGS.minSize),
      driftX: (rand() - 0.5) * 0.02,
      driftY: (rand() - 0.5) * 0.02,
    });
  }

  const markers: Marker[] = [];
  for (let i = 0; i < SETTINGS.markerCount; i++) {
    markers.push({
      x: rand() * width,
      y: rand() * height,
      tint: Math.floor(rand() * VOID_THEME.starTint.length),
    });
  }

  const links: Array<[number, number]> = [];
  const seen = new Set<string>();
  const maxDistance = Math.min(width, height) * SETTINGS.linkDistance;
  markers.forEach((marker, index) => {
    const neighbours = markers
      .map((other, otherIndex) =>
        otherIndex === index ? null : { otherIndex, distance: Math.hypot(marker.x - other.x, marker.y - other.y) }
      )
      .filter((entry): entry is { otherIndex: number; distance: number } => Boolean(entry))
      .filter((entry) => entry.distance <= maxDistance)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 2);

    neighbours.forEach(({ otherIndex }) => {
      const key = index < otherIndex ? `${index}-${otherIndex}` : `${otherIndex}-${index}`;
      if (seen.has(key)) return;
      seen.add(key);
      links.push([index, otherIndex]);
    });
  });

  const nebulae: Nebula[] = [];
  for (let i = 0; i < SETTINGS.nebulaCount; i++) {
    const radius = Math.min(width, height) * (0.22 + rand() * 0.16);
    const puffs: NebulaPuff[] = [];
    for (let p = 0; p < SETTINGS.puffCount; p++) {
      const falloff = Math.pow(rand(), 0.6);
      const angle = rand() * Math.PI * 2;
      puffs.push({
        dx: Math.cos(angle) * falloff,
        dy: Math.sin(angle) * falloff,
        radius: 0.12 + rand() * 0.46,
        alpha: 0.04 + rand() * 0.18,
        mix: rand(),
      });
    }

    nebulae.push({
      x: rand() * (width + 100),
      y: rand() * (height + 100),
      rx: radius * (0.9 + rand() * 0.45),
      ry: radius * (0.58 + rand() * 0.36),
      angle: rand() * Math.PI,
      tintA: i % VOID_THEME.nebula.length,
      tintB: (i + 1) % VOID_THEME.nebula.length,
      puffs,
    });
  }

  return { stars, markers, links, nebulae };
}

function drawNebula(
  ctx: CanvasRenderingContext2D,
  nebula: Nebula,
  blurPx: number,
  opacity: number
) {
  const colorA = VOID_THEME.nebula[nebula.tintA];
  const colorB = VOID_THEME.nebula[nebula.tintB];
  const pad = Math.max(nebula.rx, nebula.ry) * 0.65;
  const offWidth = Math.max(2, Math.ceil((nebula.rx + pad) * 2));
  const offHeight = Math.max(2, Math.ceil((nebula.ry + pad) * 2));
  const offscreen = document.createElement("canvas");
  offscreen.width = offWidth;
  offscreen.height = offHeight;
  const offCtx = offscreen.getContext("2d");
  if (!offCtx) return;

  offCtx.globalCompositeOperation = "lighter";
  nebula.puffs.forEach((puff) => {
    const x = offWidth / 2 + puff.dx * nebula.rx;
    const y = offHeight / 2 + puff.dy * nebula.ry;
    const radius = puff.radius * Math.max(nebula.rx, nebula.ry) * 0.55;
    const [r, g, b] = mixColor(colorA, colorB, puff.mix);
    const gradient = offCtx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${puff.alpha})`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
    offCtx.fillStyle = gradient;
    offCtx.beginPath();
    offCtx.arc(x, y, radius, 0, Math.PI * 2);
    offCtx.fill();
  });

  ctx.save();
  ctx.translate(nebula.x, nebula.y);
  ctx.rotate(nebula.angle);
  ctx.globalAlpha = opacity;
  ctx.globalCompositeOperation = "lighter";
  ctx.filter = `blur(${blurPx}px)`;
  ctx.drawImage(offscreen, -offWidth / 2, -offHeight / 2);
  ctx.filter = "none";
  ctx.restore();
}

function paintScene(ctx: CanvasRenderingContext2D, width: number, height: number, scene: Scene) {
  const background = ctx.createLinearGradient(0, 0, 0, height);
  background.addColorStop(0, VOID_THEME.top);
  background.addColorStop(1, VOID_THEME.bottom);
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  scene.nebulae.forEach((nebula) => drawNebula(ctx, nebula, SETTINGS.blurPx, SETTINGS.nebulaOpacity));

  ctx.lineWidth = 1;
  ctx.strokeStyle = VOID_THEME.lineColor;
  scene.links.forEach(([aIndex, bIndex]) => {
    const a = scene.markers[aIndex];
    const b = scene.markers[bIndex];
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  });

  scene.markers.forEach((marker) => {
    const core = 0.9;
    const glow = ctx.createRadialGradient(marker.x, marker.y, 0, marker.x, marker.y, 8);
    glow.addColorStop(0, hexToRgba(VOID_THEME.starTint[marker.tint], 0.35));
    glow.addColorStop(1, hexToRgba(VOID_THEME.starTint[marker.tint], 0));
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(marker.x, marker.y, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = hexToRgba(VOID_THEME.starTint[marker.tint], 0.95);
    ctx.beginPath();
    ctx.arc(marker.x, marker.y, core, 0, Math.PI * 2);
    ctx.fill();
  });
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const baseCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<Scene | null>(null);
  const seedRef = useRef(createSeed());
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      sizeRef.current = { width, height };
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sceneRef.current = createScene(width, height, seedRef.current);
      const base = document.createElement("canvas");
      base.width = canvas.width;
      base.height = canvas.height;
      const baseCtx = base.getContext("2d");
      if (baseCtx) {
        baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        paintScene(baseCtx, width, height, sceneRef.current);
        baseCanvasRef.current = base;
      }
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(base, 0, 0, width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden select-none pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,63,160,0.16),rgba(5,6,15,0)_55%),linear-gradient(to_bottom,#05060f_0%,#0d1024_100%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_72%,rgba(0,0,0,0.42)_100%)]" />
    </div>
  );
}
