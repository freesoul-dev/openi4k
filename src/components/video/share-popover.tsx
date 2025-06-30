"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Share2, Copy, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState, type ReactNode } from "react"

interface SharePopoverProps {
  children: ReactNode;
}

const SharePopoverTrigger = () => (
  <>
    <Share2 className="h-6 w-6" />
    <span className="sr-only">Share</span>
  </>
);

export function SharePopover({ children }: SharePopoverProps) {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const videoUrl = window.location.href; // In a real app, this would be a direct link to the video
    navigator.clipboard.writeText(videoUrl);
    setCopied(true);
    toast({
      title: "Copied to clipboard!",
      description: "You can now share the video link.",
    })
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2">
        <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="ml-2">{copied ? 'Copied!' : 'Copy Link'}</span>
            </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

SharePopover.Trigger = SharePopoverTrigger;
