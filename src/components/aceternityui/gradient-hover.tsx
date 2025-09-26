"use client";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  showOnHoverOnly = false,
  variant = "solid",
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
    showOnHoverOnly?: boolean;
    variant?: "solid" | "ghost";
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #9CA3AF 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered && !showOnHoverOnly) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, showOnHoverOnly, duration]);

  const baseContainer =
    variant === "ghost"
      ? "relative flex rounded-full border items-center justify-center overflow-visible p-px w-fit"
      : "relative flex rounded-full border  content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit";

  const innerBase =
    variant === "ghost"
      ? "w-auto z-10 bg-transparent rounded-[inherit]"
      : "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]";
  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        baseContainer,
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          innerBase,
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction], opacity: showOnHoverOnly ? 0 : 1 }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
          opacity: hovered ? 1 : showOnHoverOnly ? 0 : 1,
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      {variant !== "ghost" && (!showOnHoverOnly || hovered) && (
        <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
      )}
    </Tag>
  );
}
