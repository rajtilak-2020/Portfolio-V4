"use client";

import { cn } from "@/lib/utils";
import React, { ElementType, ReactNode, useEffect, useState } from "react";

export interface VideoTextProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: "auto" | "metadata" | "none";
  children: ReactNode;
  fontSize?: string | number;
  fontWeight?: string | number;
  textAnchor?: string;
  dominantBaseline?: string;
  fontFamily?: string;
  as?: ElementType;
}

export function VideoText({
  src,
  children,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = 20,
  fontWeight = "bold",
  textAnchor = "middle",
  dominantBaseline = "middle",
  fontFamily = "sans-serif",
  as: Component = "div",
}: VideoTextProps) {
  const [svgMask, setSvgMask] = useState("");
  const content = React.Children.toArray(children).join("");

  useEffect(() => {
    const updateSvgMask = () => {
      // Calculate responsive font size with better mobile support
      let responsiveFontSize;
      if (typeof fontSize === "number") {
        // Use viewport units that work well in SVG
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
          // On mobile, use a larger vw value for better visibility
          responsiveFontSize = `${Math.max(fontSize * 2, 24)}vw`;
        } else {
          // On desktop, use the original fontSize with vw units
          responsiveFontSize = `${fontSize}vw`;
        }
      } else {
        responsiveFontSize = fontSize;
      }
      
      // Create a larger viewBox for better text rendering and positioning
      // Using 800x200 viewBox for better text control
      const newSvgMask = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 200' preserveAspectRatio='xMidYMid meet'>
        <text x='400' y='120' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}' fill='white'>${content}</text>
      </svg>`;
      setSvgMask(newSvgMask);
    };

    updateSvgMask();
    window.addEventListener("resize", updateSvgMask);
    return () => window.removeEventListener("resize", updateSvgMask);
  },
  [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily]);
  
  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`;
  
  return (
    <Component className={cn(`relative w-full h-full`, className)}>
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
          playsInline
        >
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      </div>

      <span className="sr-only">{content}</span>
    </Component>
  );
}