import { MapPin, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/magicui/IHButton";
import { RippleButton } from "@/components/magicui/ripple-button";

interface InfoButtonProps {
  className?: string;
}

export const InfoButton = ({ className }: InfoButtonProps) => {
  const glassStyle = cn(
    "relative overflow-hidden rounded-xl px-4 py-1.5 text-sm font-medium",
    "backdrop-blur-xl backdrop-saturate-200",
    "border border-white/30 dark:border-white/10",
    "bg-white/15 dark:bg-white/5",
    "transition-all duration-300 ease-in-out",
    "text-black dark:text-white",
    "hover:bg-white/20 dark:hover:bg-white/10",
    "hover:text-black dark:hover:text-white",
    "before:absolute before:top-0 before:right-0 before:w-1/3 before:h-full",
    "before:blur-[20px] before:opacity-[0.6]",
    "before:bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.3),_transparent_70%)]",
    "after:absolute after:inset-0 after:opacity-[0.03] after:pointer-events-none",
    "after:content-[''] after:absolute after:top-[-1px] after:right-[-1px]",
    "after:w-[1px] after:h-[1px] after:rotate-45",
    "after:bg-gradient-to-r after:from-white/0 after:via-white/60 after:to-white/0",
    "after:animate-glow-shine"
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

      {/* Sponsor Me Button */}
      <InteractiveHoverButton className={glassStyle}>
        Sponsor Me
      </InteractiveHoverButton>

      {/* Schedule Meeting Button */}
      <RippleButton rippleColor="#ffffff" className={glassStyle}>
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
