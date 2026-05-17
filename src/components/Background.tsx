"use client";

import { usePathname } from "next/navigation";
import { getBackgroundConfig } from "@/data/backgrounds";

export function Background() {
  const pathname = usePathname();
  const config = getBackgroundConfig(pathname || "/");

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <BackgroundLayer
        base={config.light.base}
        rays={config.light.rays}
        className="dark:hidden"
      />
      <BackgroundLayer
        base={config.dark.base}
        rays={config.dark.rays}
        className="hidden dark:block"
      />
      <div className="site-background-noise absolute inset-0" />
    </div>
  );
}

function BackgroundLayer({
  base,
  rays,
  className,
}: {
  base: string;
  rays: ReturnType<typeof getBackgroundConfig>["light"]["rays"];
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 transition-colors duration-700 ${className ?? ""}`}
      style={{ backgroundColor: base }}
    >
      <div className="site-background-shell">
        {rays.map((ray, index) => (
          <div
            key={`${ray.left}-${ray.top}-${index}`}
            className="site-background-ray"
            style={{
              top: ray.top,
              left: ray.left,
              width: ray.width,
              height: ray.height,
              opacity: ray.opacity,
              transform: `rotate(${ray.rotate})`,
              background: ray.gradient,
            }}
          />
        ))}
      </div>
    </div>
  );
}
