import { MapPin, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/magicui/IHButton";
import { RippleButton } from "@/components/magicui/ripple-button";

interface InfoButtonProps {
  className?: string;
}

export const InfoButton = ({ className }: InfoButtonProps) => {
  const glassStyle = cn(
    "rounded-xl px-4 py-1.5 text-sm font-medium",
    "backdrop-blur-2xl backdrop-saturate-150",
    "border border-white/20 dark:border-white/10",
    "bg-white/20 dark:bg-white/5",
    "transition-all duration-300 ease-in-out",
    "text-black dark:text-white",
    "hover:bg-white/30 dark:hover:bg-white/10",
    "hover:text-black dark:hover:text-white",
    "shadow-[inset_-0.5px_0.5px_0px_rgba(255,255,255,0.3)]",
    "ring-1 ring-inset ring-white/10 dark:ring-white/5"
  );

  const contentStyle = "flex items-center gap-2 group";

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {/* Location Button */}
      <div className={cn(glassStyle, "cursor-default select-none")}>
        <div className={contentStyle}>
          <MapPin
            size={16}
            className="text-black/70 dark:text-white/60 group-hover:text-green-500"
          />
          <span>East Odisha, India</span>
        </div>
      </div>

      {/* Sponsor Me Button (preserving hover animation) */}
      <InteractiveHoverButton
        className={cn(glassStyle, "relative overflow-hidden")}
      >
        Sponsor Me
      </InteractiveHoverButton>

      {/* Schedule Meeting Button */}
      <RippleButton
        rippleColor="#ffffff"
        className={glassStyle}
      >
        <div className={contentStyle}>
          <CalendarDays
            size={16}
            className="text-black/70 dark:text-white/60 group-hover:text-blue-500"
          />
          <span>Schedule Meeting</span>
        </div>
      </RippleButton>
    </div>
  );
};
