import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import Link from 'next/link';

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
        <DialogHeader className="items-center text-center">
          {/* <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="mb-4"
            data-ai-hint="pink logo"
          /> */}
          <DialogTitle className="font-headline text-2xl text-primary">freesoul.cam/</DialogTitle>
          <DialogDescription className="font-body pt-2">
            We do video projects for friends and friends of friends. 
            No social media, our footage goes to our clients only
            Text (sms only) 917-765-8475 to get in touch.
            <br />
            <p className='text-center text-md font-body'>
              <Link href="/pricing" className='text-primary hover:text-primary/80'>Pricing</Link>
            </p>
          </DialogDescription>
        </DialogHeader>
        {/* <div className="py-4 font-body text-sm text-muted-foreground">
          <p>
            <Link href="/pricing">Pricing</Link>
          </p>
        </div> */}
        {/* <div className="flex items-center justify-center space-x-6 pt-2">
          <a href="#" aria-label="Email" className="text-foreground hover:text-primary transition-colors"><Mail /></a>
          <a href="#" aria-label="GitHub" className="text-foreground hover:text-primary transition-colors"><Github /></a>
          <a href="#" aria-label="LinkedIn" className="text-foreground hover:text-primary transition-colors"><Linkedin /></a>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
