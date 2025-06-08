"use client";

import { cn } from "@/lib/utils";
import { Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

interface InfoButtonProps {
  className?: string;
}

export const LocationTimeButtons = ({ className }: InfoButtonProps) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).toLowerCase();
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const buttonBaseStyles =
    "group relative inline-flex items-center gap-2 rounded-md px-4 py-1.5 text-sm transition-all duration-300 ease-out backdrop-blur-md backdrop-filter border";

  const lightModeStyles =
    "text-black/80 bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.05)]";

  const darkModeStyles =
    "dark:text-white/80 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]";

  const hoverOverlay =
    "absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out dark:via-white/5";

  return (
    <div className={cn("flex gap-3", className)}>
      <button
        aria-label="Your location is Cuttack, India"
        className={cn(buttonBaseStyles, lightModeStyles, darkModeStyles)}
      >
        <MapPin
          size={14}
          className="transition-transform duration-300 ease-out group-hover:scale-110"
        />
        <span className="relative z-10">Cuttack, India</span>
        <div className={hoverOverlay} />
      </button>

      <button
        aria-label={`Current time is ${currentTime}`}
        className={cn(buttonBaseStyles, lightModeStyles, darkModeStyles)}
      >
        <Clock
          size={14}
          className="transition-transform duration-300 ease-out group-hover:scale-110"
        />
        <span className="relative z-10">{currentTime}</span>
        <div className={hoverOverlay} />
      </button>
    </div>
  );
};
