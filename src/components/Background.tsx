"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function Background() {
  const { resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Star[] = [];
    const starCount = Math.min(130, Math.floor((width * height) / 12000));

    interface Star {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseOpacity: number;
      opacityPhase: number;
      twinkleSpeed: number;
    }

    const isDark = resolvedTheme === "dark";

    const createStars = () => {
      particles.length = 0;
      for (let i = 0; i < starCount; i++) {
        const radius = Math.random() * 2.5 + 0.35;
        // Make stars slightly brighter in both modes since they are pure white
        const baseOpacity = Math.random() * 0.45 + (isDark ? 0.4 : 0.5);
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          radius,
          baseOpacity,
          opacityPhase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.008 + 0.004,
        });
      }
    };

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createStars();
    };

    window.addEventListener("resize", resize);
    createStars();

    let lastTime = 0;
    const fpsInterval = 1000 / 30; // Throttle to 30 FPS

    let isWindowFocused = true;
    const handleFocus = () => { isWindowFocused = true; };
    const handleBlur = () => { isWindowFocused = false; };
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    const draw = (timestamp?: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (!isWindowFocused) return;

      const currentTime = timestamp || performance.now();
      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;

      lastTime = currentTime - (elapsed % fpsInterval);

      ctx.clearRect(0, 0, width, height);

      // Group lines by alpha force to batch draw calls
      const buckets: { x1: number; y1: number; x2: number; y2: number }[][] = [[], [], [], []];

      // Draw constellation connecting lines with enhanced visibility
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const distSq = dx * dx + dy * dy;

          // 110^2 is 12100. Check square distance first to skip Math.sqrt for 95%+ of particles
          if (distSq < 12100) {
            const dist = Math.sqrt(distSq);
            const force = (110 - dist) / 110;
            const bucketIdx = Math.min(3, Math.floor(force * 4));
            buckets[bucketIdx].push({ x1: pi.x, y1: pi.y, x2: pj.x, y2: pj.y });
          }
        }
      }

      // Draw connections in batches to reduce draw calls from hundreds to max 4
      ctx.lineWidth = 0.85;
      for (let b = 0; b < 4; b++) {
        const bucket = buckets[b];
        if (bucket.length === 0) continue;

        const alpha = (b + 1) * 0.25;
        ctx.strokeStyle = isDark
          ? `rgba(168, 85, 247, ${alpha * 0.35})` // Purple-500
          : `rgba(139, 92, 246, ${alpha * 0.2})`;  // Violet-500

        ctx.beginPath();
        for (let k = 0; k < bucket.length; k++) {
          const line = bucket[k];
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
        }
        ctx.stroke();
      }

      // Draw stars
      particles.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        else if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        else if (star.y > height) star.y = 0;

        star.opacityPhase += star.twinkleSpeed;
        const currentOpacity = star.baseOpacity + Math.sin(star.opacityPhase) * 0.15;
        const opacity = Math.max(0.1, Math.min(1, currentOpacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, resolvedTheme]);

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden select-none pointer-events-none">
      <div className="absolute inset-0 transition-all duration-700 ease-in-out site-bg-gradient" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-90" />
      <div className="site-background-noise absolute inset-0 opacity-[0.015] dark:opacity-[0.025] pointer-events-none" />
      
      {/* Foggy horizon light merging blue and purple */}
      <div className="absolute bottom-[-35vh] left-[-20vw] right-[-20vw] h-[65vh] rounded-full pointer-events-none filter blur-[80px] site-horizon-glow" />
    </div>
  );
}
