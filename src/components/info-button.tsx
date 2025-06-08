"use client";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/magicui/IHButton";

interface LocationButtonProps {
  className?: string;
}
export const LocationButton = ({ className }: LocationButtonProps) => {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <div className="group flex items-center gap-2 rounded-md border bg-background px-4 py-1.5 text-sm text-foreground transition-colors">
        <MapPin
          size={15}
          className="text-muted-foreground transition-colors duration-300 group-hover:text-green-500"
        />
        <span>East Odisha, India</span>
      </div>
      <InteractiveHoverButton>Sponsor Me</InteractiveHoverButton>
    </div>
  );
};
