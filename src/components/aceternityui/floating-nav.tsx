"use client";
import { HoverBorderGradient } from "@/components/aceternityui/gradient-hover";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import * as FM from "framer-motion";
import { AnimatePresence, motion } from "motion/react";
import React, { useMemo, useState } from "react";

type NavItem = {
  name: string;
  link: string;
  icon?: React.ReactNode;
  type: "primary" | "social";
};

const DEFAULT_MAGNIFICATION = 50;
const DEFAULT_DISTANCE = 80;

const MagnifyIcon = ({
  children,
  mousex,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
}: {
  children: React.ReactNode;
  mousex: FM.MotionValue<number>;
  magnification?: number;
  distance?: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const distanceCalc = FM.useTransform(mousex, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 } as DOMRect;
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = FM.useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );
  const width = FM.useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  return (
    <FM.motion.div ref={ref} style={{ width }} className="flex aspect-square items-center justify-center">
      {children}
    </FM.motion.div>
  );
};

export const FloatingNav = ({
  navItems,
  className,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
}: {
  navItems?: NavItem[];
  className?: string;
  magnification?: number;
  distance?: number;
}) => {
  const [visible] = useState(true);

  // Build items from DATA if not provided
  const items: NavItem[] = useMemo(() => {
    if (navItems && navItems.length > 0) return navItems;

    const primary = (DATA.navbar || []).map((n) => {
      const Icon = n.icon as unknown as React.ComponentType<{ className?: string }>;
      return {
        name: n.label,
        link: n.href,
        icon: Icon ? <Icon className="h-5 w-5" /> : undefined,
        type: "primary",
      } as NavItem;
    });

    const socials = Object.values(DATA.contact?.social || {})
      .filter((s: any) => s?.navbar)
      .map((s: any) => {
        const Icon = s.icon as unknown as React.ComponentType<{ className?: string }>;
        return {
          name: s.name,
          link: s.url,
          icon: Icon ? <Icon className="h-5 w-5" /> : undefined,
          type: "social",
        } as NavItem;
      });

    return [...primary, ...socials];
  }, [navItems]);

  const mousex = FM.useMotionValue<number>(Infinity);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: visible ? 1 : 1, y: 0 }}
        transition={{ duration: 0.2 }}
        onMouseMove={(e) => mousex.set(e.pageX)}
        onMouseLeave={() => mousex.set(Infinity)}
        className={cn(
          "flex max-w-fit fixed inset-x-0 bottom-6 lg:top-6 lg:bottom-auto mx-auto rounded-full dark:bg-black/40 bg-black/20 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.25)] z-[5000] pr-3 pl-3 py-3 md:py-4 items-center justify-center space-x-2",
          className
        )}
      >
        {items.map((item, idx) => (
          <a
            key={`link=${idx}`}
            href={item.link}
            className={cn(
              "group relative flex items-center space-x-2 text-neutral-600 dark:text-neutral-50 hover:text-neutral-800 dark:hover:text-neutral-300"
            )}
            aria-label={item.name}
            target={item.link?.startsWith("http") ? "_blank" : undefined}
            rel={item.link?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {item.type === "primary" ? (
              <span className="lg:hidden">
                <MagnifyIcon mousex={mousex} magnification={magnification} distance={distance}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full">
                    <span className="flex">{item.icon}</span>
                  </div>
                </MagnifyIcon>
              </span>
            ) : (
              <MagnifyIcon mousex={mousex} magnification={magnification} distance={distance}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="flex">{item.icon}</span>
                </div>
              </MagnifyIcon>
            )}
            {item.type === "primary" && (
              <span className="hidden lg:block text-sm">
                <HoverBorderGradient
                  as="span"
                  variant="ghost"
                  showOnHoverOnly
                  duration={0.8}
                  className="px-3 py-1"
                  containerClassName="rounded-full"
                >
                  {item.name}
                </HoverBorderGradient>
              </span>
            )}
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
