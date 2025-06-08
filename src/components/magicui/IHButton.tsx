import React from "react";
import { HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <a
      href="https://github.com/sponsors/rajtilak-2020"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer items-center overflow-hidden rounded-md border bg-background px-4 py-1.5 text-sm font-medium transition-all",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-10 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-10 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-500 group-hover:-translate-x-4 group-hover:opacity-100">
          <span>{children}</span>
          <HeartHandshake size={16} />
        </div>
      </button>
    </a>
  );
});
InteractiveHoverButton.displayName = "Sponsor K Rajtilak";