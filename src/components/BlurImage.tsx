import type { CSSProperties, ImgHTMLAttributes } from "react";
import manifest from "@/data/image-manifest.json";

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
};
const images = manifest as Record<
  string,
  { width: number; height: number; variants: { src: string; width: number }[] }
>;
export default function BlurImage({
  src,
  alt,
  fill,
  priority,
  quality,
  placeholder,
  blurDataURL,
  unoptimized,
  width,
  height,
  style,
  sizes,
  ...props
}: ImageProps) {
  void quality;
  void placeholder;
  void blurDataURL;
  void unoptimized;
  const entry = images[src];
  const fallback =
    entry?.variants.find((v) => v.width >= 800) || entry?.variants.at(-1);
  const imageStyle: CSSProperties = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        ...style,
      }
    : style || {};
  // Generated files are static assets, so GitHub Pages needs no image server.
  return (
    <img
      {...props}
      src={fallback?.src || src}
      alt={alt || ""}
      width={width || entry?.width}
      height={height || entry?.height}
      style={imageStyle}
      sizes={sizes || (fill ? "(max-width: 760px) 90vw, 900px" : undefined)}
      srcSet={entry?.variants.map((v) => `${v.src} ${v.width}w`).join(", ")}
      loading={priority ? "eager" : props.loading || "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
