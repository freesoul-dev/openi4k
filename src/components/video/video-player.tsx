"use client";

import { useRef, useEffect, useState } from 'react';
import type { Video as VideoType } from '@/lib/data';
import VideoOverlay from './video-overlay';
import { Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  video: VideoType;
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            setIsPlaying(false);
          });
        } else {
          videoElement.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.6 } // 60% of the video must be visible to play
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);
  
  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
        if (videoElement.paused) {
            videoElement.play().then(() => {
              setIsPlaying(true);
            }).catch(error => {
              console.error("Error attempting to play video:", error);
              setIsPlaying(false);
            });
        } else {
            videoElement.pause();
            setIsPlaying(false);
        }
    }
  }

  return (
    <div ref={containerRef} className="relative h-screen w-full snap-start flex items-center justify-center bg-black" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={video.src}
        loop
        muted
        playsInline
        className="h-full w-full object-contain"
        preload="auto"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className={`transition-all duration-300 ${isPlaying ? 'opacity-0 scale-150' : 'opacity-50 scale-100'}`}>
          <Play className="w-24 h-24 text-white/50" />
        </div>
      </div>
      <VideoOverlay video={video} />
    </div>
  );
}
