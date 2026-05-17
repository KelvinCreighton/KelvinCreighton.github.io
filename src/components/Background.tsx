"use client";

import React, { useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getBackgroundConfig } from "@/data/backgrounds";

export function Background() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundStyle = useMemo(() => {
    const config = getBackgroundConfig(pathname);
    const viscosity = config.viscosity || 40;
    const sharpness = config.sharpness || 14;
    const density = config.density || 60;

    // Convert the 100 blobs into a radial-gradient stack
    const gradients = config.blobs.map((blob) => {
      // 1. Viscosity scales the effective size of the blob spread
      // 2. Sharpness controls the falloff between the solid core and transparency
      // 3. Density controls the solid core size
      
      const spreadScale = 1 + (viscosity / 100);
      const edgeStart = density * 0.5; // Base density
      
      // High sharpness (e.g. 20) makes the edgeEnd very close to edgeStart (hard edge)
      // Low sharpness (e.g. 2) makes the edgeEnd far from edgeStart (soft edge)
      const edgeEnd = Math.min(100, edgeStart + (100 / (sharpness || 1)));

      return `radial-gradient(circle calc(${blob.size} * ${spreadScale}) at ${blob.left} ${blob.top}, ${blob.color} 0%, ${blob.color} ${edgeStart}%, transparent ${edgeEnd}%)`;
    });

    return {
      backgroundImage: gradients.join(", "),
      opacity: config.masterOpacity,
      backgroundSize: "100% 100%",
    };
  }, [pathname]);

  if (!mounted) {
    return <div className="fixed inset-0 -z-50 bg-white dark:bg-black" />;
  }

  return (
    <div className="fixed inset-0 -z-50 bg-white dark:bg-black transition-colors duration-1000">
      {/* 
          High-performance CSS Mesh Gradient 
          Consolidates 100 blobs into a single background-image property.
          This removes 100 DOM nodes and the expensive SVG filter overhead.
      */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={backgroundStyle}
      />
      
      {/* Grain/Noise Overlay - Kept for texture and to mask gradient banding */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
