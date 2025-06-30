import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { ReactNode } from 'react';

interface AboutModalProps {
  children: ReactNode;
}

export function AboutModal({ children }: AboutModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">About @jane_doe</DialogTitle>
          <DialogDescription className="font-body pt-2">
            Welcome to my corner of the internet. I'm a passionate creator exploring the world through video.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 font-body text-sm text-muted-foreground">
          <p>This is a project showcasing a modern, immersive video feed experience built with Next.js and Tailwind CSS. It features lazy loading for videos, theme toggling, category filtering, and a responsive design inspired by popular social media platforms.</p>
        </div>
        <div className="flex items-center justify-center space-x-6 pt-2">
          <a href="#" aria-label="Email" className="text-foreground hover:text-primary transition-colors"><Mail /></a>
          <a href="#" aria-label="GitHub" className="text-foreground hover:text-primary transition-colors"><Github /></a>
          <a href="#" aria-label="LinkedIn" className="text-foreground hover:text-primary transition-colors"><Linkedin /></a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
