import { MapPin, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/magicui/IHButton";
import { RippleButton } from "@/components/magicui/ripple-button";

interface InfoButtonProps {
  className?: string;
}

export const InfoButton = ({ className }: InfoButtonProps) => {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {/* Location Button with Map Link */}
      <a
        href="https://maps.app.goo.gl/K27UNokhDKpizhuZ6"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-md border px-4 py-1.5 text-sm text-foreground transition-colors hover:bg-accent"
      >
        <MapPin
          size={16}
          className="text-muted-foreground transition-colors duration-300 group-hover:text-green-500"
        />
        <span>East Odisha, India</span>
      </a>
      <InteractiveHoverButton className="px-4 py-1.5 text-sm">
        Sponsor Me
      </InteractiveHoverButton>
      <RippleButton
      rippleColor="#ffffff"
      className="rounded-md border px-4 py-1.5 text-sm text-foreground transition-colors hover:bg-accent">
      <div className="flex items-center gap-2">
    <CalendarDays
      size={16}
      className="text-muted-foreground transition-colors duration-300 group-hover:text-blue-500"/>
    <span>Schedule Meeting</span>
  </div>
</RippleButton>

    </div>
  );
};
