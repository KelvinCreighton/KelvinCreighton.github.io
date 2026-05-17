"use client";

import React, { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getBackgroundConfig } from "@/data/backgrounds";

export function Background() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const config = getBackgroundConfig(pathname || "/");
  const { viscosity, sharpness, density, masterOpacity, blobs } = config;
  const matrixValues = `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${sharpness} ${-(sharpness / 2)}`;

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const render = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // We render at a lower resolution (0.5 scale) to make the SVG blur 
      // filter significantly faster, while still looking smooth.
      const dpr = window.devicePixelRatio || 1;
      const scale = 0.5; 
      canvas.width = width * scale * dpr;
      canvas.height = height * scale * dpr;
      ctx.scale(scale * dpr, scale * dpr);

      ctx.clearRect(0, 0, width, height);

      const parseDim = (dim: string, total: number) => {
        if (dim.endsWith("%")) return (parseFloat(dim) / 100) * total;
        if (dim.endsWith("vw")) return (parseFloat(dim) / 100) * width;
        if (dim.endsWith("vh")) return (parseFloat(dim) / 100) * height;
        return parseFloat(dim);
      };

      const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      };

      blobs.forEach((blob) => {
        const x = parseDim(blob.left, width);
        const y = parseDim(blob.top, height);
        const r = parseDim(blob.size, width);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        
        // Exact 4-stop gradient logic
        const stop2Pos = (density + (100 - density) * 0.5) / 100;
        
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(density / 100, blob.color);
        gradient.addColorStop(stop2Pos, hexToRgba(blob.color, 0.4));
        gradient.addColorStop(1, hexToRgba(blob.color, 0));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    render();

    window.addEventListener("resize", render);
    return () => window.removeEventListener("resize", render);
  }, [mounted, pathname, blobs, density]); // Explicitly include blobs and density for safety

  if (!mounted) {
    return <div className="fixed inset-0 -z-50 bg-white dark:bg-black" />;
  }

  return (
    <div className="fixed inset-0 -z-50 bg-white dark:bg-black transition-colors duration-1000 overflow-hidden">
      {/* 
          SVG Filter Definition 
          feGaussianBlur creates the merging "viscosity"
          feColorMatrix creates the "sharpness" and gooey edge
      */}
      <svg className="absolute w-0 h-0 invisible pointer-events-none">
        <defs>
          <filter id="gooey-bg-optimized" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation={viscosity} result="blur" />
            <feColorMatrix in="blur" mode="matrix" values={matrixValues} result="goo" />
          </filter>
        </defs>
      </svg>

      {/* 
          The Optimized Canvas 
          We apply the SVG filter to the SINGLE canvas element.
      */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ 
          filter: "url(#gooey-bg-optimized)",
          opacity: masterOpacity,
        }}
      />
      
      {/* Grain/Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
