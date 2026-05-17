export interface BackgroundRay {
  top: string;
  left: string;
  width: string;
  height: string;
  rotate: string;
  opacity: number;
  gradient: string;
}

export interface BackgroundLayer {
  base: string;
  rays: BackgroundRay[];
}

export interface BackgroundConfig {
  light: BackgroundLayer;
  dark: BackgroundLayer;
}

const LIGHT_RAYS: BackgroundRay[] = [
  {
    top: "-12rem",
    left: "-10rem",
    width: "78rem",
    height: "17rem",
    rotate: "-18deg",
    opacity: 0.42,
    gradient: "radial-gradient(ellipse closest-side at center, rgba(59, 130, 246, 0.32), rgba(14, 165, 233, 0.12) 58%, rgba(255, 255, 255, 0) 100%)",
  },
  {
    top: "-10rem",
    left: "8rem",
    width: "74rem",
    height: "16rem",
    rotate: "-20deg",
    opacity: 0.34,
    gradient: "radial-gradient(ellipse closest-side at center, rgba(99, 102, 241, 0.26), rgba(168, 85, 247, 0.12) 56%, rgba(255, 255, 255, 0) 100%)",
  },
  {
    top: "-7rem",
    left: "22rem",
    width: "88rem",
    height: "22rem",
    rotate: "-12deg",
    opacity: 0.28,
    gradient: "radial-gradient(ellipse closest-side at center, rgba(34, 197, 94, 0.18), rgba(59, 130, 246, 0.08) 62%, rgba(255, 255, 255, 0) 100%)",
  },
  {
    top: "-14rem",
    left: "50rem",
    width: "68rem",
    height: "18rem",
    rotate: "-24deg",
    opacity: 0.3,
    gradient: "radial-gradient(ellipse closest-side at center, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.08) 55%, rgba(255, 255, 255, 0) 100%)",
  },
];

const DARK_RAYS: BackgroundRay[] = [
  {
    top: "-15rem",
    left: "-8rem",
    width: "82rem",
    height: "18rem",
    rotate: "-18deg",
    opacity: 0.95,
    gradient: "radial-gradient(ellipse closest-side at center, rgba(75, 140, 180, 0.9), rgba(64, 145, 136, 0.5) 58%, rgba(9, 9, 11, 0) 100%)",
  },
  {
    top: "-14rem",
    left: "8rem",
    width: "78rem",
    height: "18rem",
    rotate: "-20deg",
    opacity: 0.78,
    gradient: "radial-gradient(ellipse closest-side at center, rgba(59, 130, 246, 0.72), rgba(20, 184, 166, 0.28) 56%, rgba(9, 9, 11, 0) 100%)",
  },
  {
    top: "-10rem",
    left: "18rem",
    width: "112rem",
    height: "26rem",
    rotate: "18deg",
    opacity: 0.5,
    gradient: "radial-gradient(ellipse closest-side at center, rgba(56, 189, 248, 0.5), rgba(99, 102, 241, 0.18) 58%, rgba(9, 9, 11, 0) 100%)",
  },
  {
    top: "-12rem",
    left: "62rem",
    width: "74rem",
    height: "20rem",
    rotate: "-22deg",
    opacity: 0.62,
    gradient: "radial-gradient(ellipse closest-side at center, rgba(14, 165, 233, 0.6), rgba(79, 70, 229, 0.16) 54%, rgba(9, 9, 11, 0) 100%)",
  },
];

export const HOME_BACKGROUND: BackgroundConfig = {
  light: {
    base: "#f8fafc",
    rays: LIGHT_RAYS,
  },
  dark: {
    base: "#09090b",
    rays: DARK_RAYS,
  },
};

export const PAGE_BACKGROUNDS: Record<string, BackgroundConfig> = {
  "/": HOME_BACKGROUND,
  "/projects": HOME_BACKGROUND,
  "/resume": {
    light: {
      base: "#f8fafc",
      rays: LIGHT_RAYS.map((ray, index) => ({
        ...ray,
        opacity: index < 2 ? ray.opacity * 0.82 : ray.opacity * 0.7,
      })),
    },
    dark: {
      base: "#09090b",
      rays: DARK_RAYS.map((ray, index) => ({
        ...ray,
        opacity: index < 2 ? ray.opacity * 0.78 : ray.opacity * 0.66,
      })),
    },
  },
};

export const getBackgroundConfig = (pathname: string): BackgroundConfig => {
  return PAGE_BACKGROUNDS[pathname] || HOME_BACKGROUND;
};
