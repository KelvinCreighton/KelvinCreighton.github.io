"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { getBackgroundConfig } from "@/data/backgrounds";

export function Background() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const config = useMemo(() => getBackgroundConfig(pathname), [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const render = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set internal resolution to match viewport
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // We can use a slightly lower resolution and scale up for a free "softening" effect
      // and better performance on high-DPI screens.
      const dpr = window.devicePixelRatio || 1;
      const scale = 0.5; // Render at 50% resolution
      canvas.width = width * scale * dpr;
      canvas.height = height * scale * dpr;
      ctx.scale(scale * dpr, scale * dpr);

      ctx.clearRect(0, 0, width, height);

      const viscosity = config.viscosity || 40;
      const sharpness = config.sharpness || 14;
      const density = config.density || 60;
      const spreadScale = 1 + (viscosity / 100);

      // Helper to parse dimensions like "5%", "20vw", etc.
      const parseDim = (dim: string, total: number, isV: boolean) => {
        if (dim.endsWith("%")) return (parseFloat(dim) / 100) * total;
        if (dim.endsWith("vw")) return (parseFloat(dim) / 100) * width;
        if (dim.endsWith("vh")) return (parseFloat(dim) / 100) * height;
        return parseFloat(dim);
      };

      config.blobs.forEach((blob) => {
        const x = parseDim(blob.left, width, false);
        const y = parseDim(blob.top, height, true);
        
        // Match generator logic: 
        // 1. Viscosity (blur) effectively increases the visible size
        // 2. We use the 4-stop gradient from the generator
        const baseRadius = parseDim(blob.size, width, false);
        const blurRadius = viscosity; 
        const totalRadius = baseRadius + (blurRadius * 2);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, totalRadius);
        
        // Helper to convert hex to RGBA with alpha
        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        // Generator's 4-stop gradient logic:
        // stop 0: color
        // stop density: color
        // stop intermediate: color (0.4 alpha)
        // stop 100: transparent
        // We adjust these slightly to simulate the 'sharpness' effect without the matrix filter
        
        const d = density / 100;
        const s = Math.max(0.01, sharpness / 50); // Normalized sharpness
        
        // As sharpness increases, we compress the transition stops towards the density point
        const stop2 = Math.min(0.99, d + (1 - d) * (1 - s) * 0.5);
        
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(d, blob.color);
        gradient.addColorStop(stop2, hexToRgba(blob.color, 0.4));
        gradient.addColorStop(1, hexToRgba(blob.color, 0));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, totalRadius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    render();

    window.addEventListener("resize", render);
    return () => window.removeEventListener("resize", render);
  }, [mounted, config]);

  if (!mounted) {
    return <div className="fixed inset-0 -z-50 bg-white dark:bg-black" />;
  }

  return (
    <div className="fixed inset-0 -z-50 bg-white dark:bg-black transition-colors duration-1000">
      {/* 
          Ultimate Performance: HTML5 Canvas 
          Draws 100 blobs once to a single bitmap buffer.
          The browser only has to paint a flat image instead of calculating gradients.
      */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ 
          opacity: config.masterOpacity,
          imageRendering: "auto"
        }}
      />
      
      {/* Grain/Noise Overlay - Masking any canvas scaling artifacts */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
