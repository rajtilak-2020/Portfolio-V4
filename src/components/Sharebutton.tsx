"use client";

import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  text?: string;
  url: string;
}

export function ShareButton({ title, text, url }: ShareButtonProps) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url,
        });
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(url);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      <Share2 className="w-4 h-4 mr-2" />
      Share
    </button>
  );
}