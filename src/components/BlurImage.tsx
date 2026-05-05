"use client";

import Image, { ImageProps } from "next/image";
import placeholders from "@/data/image-placeholders.json";

interface BlurImageProps extends Omit<ImageProps, "src"> {
  src: string;
}

export default function BlurImage(props: BlurImageProps) {
  const { src, ...rest } = props;
  const blurDataURL = (placeholders as Record<string, string>)[src];

  return (
    <Image
      src={src}
      placeholder={blurDataURL ? "blur" : undefined}
      blurDataURL={blurDataURL}
      {...rest}
    />
  );
}
