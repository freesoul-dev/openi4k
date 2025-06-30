"use client";

import { useState } from 'react';
import { Video, SlidersHorizontal, User } from 'lucide-react';
import { AboutModal } from '@/components/about-modal';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
            <h1 className="text-2xl font-bold font-headline text-foreground">nameless.video/</h1>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:block">
              <Select onValueChange={(value: VideoCategory | 'All') => setCategory(value)} defaultValue="All">
                <SelectTrigger className="w-[180px]">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {['All', ...ALL_CATEGORIES].map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

      <footer className="absolute bottom-0 left-0 right-0 z-20 p-4 md:hidden bg-gradient-to-t from-background/50 to-transparent">
          <Select onValueChange={(value: VideoCategory | 'All') => setCategory(value)} defaultValue="All">
              <SelectTrigger className="w-full">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {['All', ...ALL_CATEGORIES].map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
      </footer>
    </div>
  );
}
