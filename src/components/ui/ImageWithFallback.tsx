"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & {
  fallbackSrc?: string;
};

export default function ImageWithFallback({
  src,
  fallbackSrc = "/assets/placeholder.png",
  alt,
  ...rest
}: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
