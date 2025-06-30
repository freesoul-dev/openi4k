"use client";

import { useState } from 'react';
import Image from 'next/image';
import { SlidersHorizontal } from 'lucide-react';
import { AboutModal } from '@/components/about-modal';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import VideoFeed from '@/components/video/video-feed';
import { ALL_CATEGORIES, videos as allVideos, type VideoCategory } from '@/lib/data';

export default function Home() {
  const [category, setCategory] = useState<VideoCategory | 'All'>('All');

  const videos = category === 'All' ? allVideos : allVideos.filter(v => v.category === category);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background font-body">
      <header className="absolute top-0 left-0 right-0 z-20 p-4">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            data-ai-hint="pink logo"
          />
          <div className="flex items-center gap-2 md:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <SlidersHorizontal className="h-5 w-5 text-foreground" />
                  <span className="sr-only">Filter by category</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {['All', ...ALL_CATEGORIES].map(cat => (
                  <DropdownMenuItem key={cat} onSelect={() => setCategory(cat as VideoCategory | 'All')}>
                    {cat}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <AboutModal>
              <Button variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-foreground"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <span className="sr-only">About Me</span>
              </Button>
            </AboutModal>
          </div>
        </div>
      </header>

      <VideoFeed videos={videos} />
    </div>
  );
}
