"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  active?: boolean; // Add active prop to determine status
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  active = true, // Default to active/completed
}: Props) {
  const { theme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  // Determine project status based on dates and active prop
  const getProjectStatus = () => {
    if (!active) return { color: "bg-yellow-500", status: "Deprecated", description: "This project is no longer maintained" };
    
    const dateText = dates.toLowerCase();
    if (dateText.includes("under development") || dateText.includes("present") || dateText.includes("currently")) {
      return { color: "bg-red-500", status: "In Development", description: "Currently working on this project" };
    }
    if (dateText.includes("maintenance")) {
      return { color: "bg-blue-500", status: "Under Maintenance", description: "Project is under maintenance" };
    }
    return { color: "bg-green-500", status: "Completed", description: "Project is completed and stable" };
  };

  const projectStatus = getProjectStatus();

  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border transition-all duration-300 ease-out h-full",
        "bg-card/50 backdrop-blur-sm",
        "shadow-md",
        theme === "dark" 
          ? "border-white/10 shadow-black/10" 
          : "border-black/10 shadow-black/5",
        className
      )}
    >
      {/* Status Indicator */}
      <div className="absolute top-3 left-3 z-10">
        <div
          className="relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div className={cn(
            "w-3 h-3 rounded-full animate-pulse cursor-help",
            projectStatus.color
          )} />
          
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute left-0 top-5 z-20 px-3 py-2 bg-black/90 text-white text-xs rounded-lg whitespace-nowrap shadow-lg">
              <div className="font-medium">{projectStatus.status}</div>
              <div className="text-gray-300 text-[10px] mt-0.5">{projectStatus.description}</div>
              <div className="absolute -top-1 left-2 w-2 h-2 bg-black/90 rotate-45" />
            </div>
          )}
        </div>
      </div>

      {/* Media Section */}
      <Link
        href={href || "#"}
        className="relative block cursor-pointer overflow-hidden"
      >
        <div className="relative h-40 overflow-hidden bg-muted/30">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none h-full w-full object-cover"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-full w-full object-cover object-top"
            />
          )}
          
          {/* Subtle overlay for better text readability */}
          {!image && !video && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          )}
        </div>
      </Link>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-4 space-y-3">
        <CardHeader className="p-0">
          <div className="space-y-2">
            <CardTitle className="text-lg font-semibold leading-tight line-clamp-2">
              {title}
            </CardTitle>
            
            <time className="inline-block text-xs font-medium text-muted-foreground bg-muted/40 px-2 py-1 rounded">
              {dates}
            </time>
            
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-0">
          <Markdown className="prose prose-sm max-w-none text-pretty font-sans text-muted-foreground dark:prose-invert prose-p:leading-relaxed prose-p:mb-2 line-clamp-3">
            {description}
          </Markdown>
        </CardContent>

        {/* Tags Section */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-2 border-t border-border/30">
            {tags?.slice(0, 6).map((tag, index) => (
              <Badge
                key={tag}
                className={cn(
                  "px-1.5 py-0.5 text-[10px] font-medium",
                  "bg-secondary/60 text-secondary-foreground border-0",
                  "cursor-default"
                )}
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 6 && (
              <Badge
                className="px-1.5 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground cursor-default"
                variant="outline"
              >
                +{tags.length - 6}
              </Badge>
            )}
          </div>
        )}

        {/* Links Section */}
        <CardFooter className="p-0 pt-2">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1 w-full">
              {links?.map((link, idx) => (
                <Link 
                  href={link?.href} 
                  key={idx} 
                  target="_blank"
                  className="inline-block"
                >
                  <Badge 
                    className={cn(
                      "flex gap-2 px-2 py-1 text-[12px] font-medium transition-all duration-200",
                      "bg-primary/90 hover:bg-primary text-primary-foreground",
                      "border-0 shadow-sm hover:shadow-md",
                      "hover:scale-105"
                    )}
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}