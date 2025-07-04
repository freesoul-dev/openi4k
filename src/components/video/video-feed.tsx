import type { Video as VideoType } from '@/lib/data';
import VideoPlayer from './video-player';
import { Ghost } from 'lucide-react';

interface VideoFeedProps {
  videos: VideoType[];
}

export default function VideoFeed({ videos }: VideoFeedProps) {
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
        <Ghost className="w-16 h-16 mb-4" />
        <p className="text-lg font-headline">No videos found for this category.</p>
        <p className="text-sm">Try selecting another one!</p>
      </div>
    );
  }

  return (
    <main className="h-full w-full bg-black snap-y snap-mandatory overflow-y-auto scrollbar-hide">
      {videos.map(video => (
        <VideoPlayer key={video.id} video={video} />
      ))}
    </main>
  );
}
