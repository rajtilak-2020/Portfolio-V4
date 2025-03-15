"use client";

import { cn } from "@/lib/utils";
import { Clock, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

interface InfoButtonProps {
  className?: string;
}

export const LocationTimeButtons = ({ className }: InfoButtonProps) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).toLowerCase();
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("flex gap-3", className)}>
      <button
        className="group relative inline-flex items-center gap-2 rounded-md 
                   bg-white/5 px-4 py-1.5 text-sm text-white/80
                   backdrop-blur-md backdrop-filter
                   border border-white/10
                   transition-all duration-300 ease-out
                   hover:bg-white/10 hover:border-white/20
                   hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        <MapPin 
          size={14} 
          className="transition-transform duration-300 ease-out group-hover:scale-110" 
        />
        <span className="relative z-10">Cuttack, India</span>
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
      </button>
      
      <button
        className="group relative inline-flex items-center gap-2 rounded-md 
                   bg-white/5 px-4 py-1.5 text-sm text-white/80
                   backdrop-blur-md backdrop-filter
                   border border-white/10
                   transition-all duration-300 ease-out
                   hover:bg-white/10 hover:border-white/20
                   hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        <Clock 
          size={14} 
          className="transition-transform duration-300 ease-out group-hover:scale-110" 
        />
        <span className="relative z-10">{currentTime}</span>
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
      </button>
    </div>
  );
};