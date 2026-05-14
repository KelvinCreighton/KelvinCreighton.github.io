"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { getBackgroundConfig } from "@/data/backgrounds";

export function Background() {
  const pathname = usePathname();

  // Get the static config for the current page
  const config = useMemo(() => getBackgroundConfig(pathname), [pathname]);

  // Generate a CSS Mesh Gradient string from the blobs
  const meshGradient = useMemo(() => {
    return config.blobs.map((blob) => {
      // We use a soft falloff directly in the CSS radial gradient
      return `radial-gradient(circle at ${blob.left} ${blob.top}, ${blob.color} 0%, transparent ${blob.size})`;
    }).join(", ");
  }, [config]);

  return (
    <div className="fixed inset-0 -z-50 bg-black overflow-hidden pointer-events-none">
      {/* 
          CSS Mesh Gradient Layer 
          Instead of rendering 60 separate elements, we render ONE property.
          This is extremely fast for the browser to render.
      */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 blur-[80px]"
        style={{ 
          backgroundImage: meshGradient,
          opacity: config.masterOpacity 
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




