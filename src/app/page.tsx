"use client";

import { useState } from 'react';
import { Video, SlidersHorizontal, User } from 'lucide-react';
import { AboutModal } from '@/components/about-modal';
import { ThemeToggle } from '@/components/theme-toggle';
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
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold font-headline text-foreground">@jane_doe</h1>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:block">
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
            </div>
            <AboutModal>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-foreground" />
                <span className="sr-only">About Me</span>
              </Button>
            </AboutModal>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <VideoFeed videos={videos} />

      <footer className="absolute bottom-0 left-0 right-0 z-20 p-4 flex justify-center md:hidden bg-gradient-to-t from-background/50 to-transparent">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-black/50 text-white rounded-full h-12 w-12">
                <SlidersHorizontal className="h-5 w-5" />
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
      </footer>
    </div>
  );
}
