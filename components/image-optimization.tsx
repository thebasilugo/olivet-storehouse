"use client"

import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { useState } from "react"

interface OptimizedImageProps extends Omit<NextImageProps, "onError" | "onLoad"> {
  fallbackSrc?: string
}

export default function OptimizedImage({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative ${isLoading ? "bg-muted animate-pulse" : ""}`}>
      <NextImage
        src={imgSrc}
        alt={alt}
        {...props}
        onError={() => {
          setImgSrc(fallbackSrc)
        }}
        onLoad={() => {
          setIsLoading(false)
        }}
        className={`${props.className || ""} ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}`}
        loading="lazy"
        quality={props.quality || 75}
        sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      />
    </div>
  )
}
