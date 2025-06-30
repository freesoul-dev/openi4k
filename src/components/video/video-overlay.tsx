import type { Video } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { SharePopover } from './share-popover';

interface VideoOverlayProps {
  video: Video;
}

export default function VideoOverlay({ video }: VideoOverlayProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white pointer-events-none">
      <div className="flex items-end gap-4">
        <div className="flex-1">
          <div className="p-3 rounded-lg bg-black/30 backdrop-blur-sm shadow-lg max-w-md">
            <p className="text-sm">{video.description}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 pointer-events-auto">
            <SharePopover>
                <Button size="icon" variant="ghost" className="bg-black/30 hover:bg-black/50 text-white rounded-full h-12 w-12">
                    <SharePopover.Trigger />
                </Button>
            </SharePopover>
        </div>
      </div>
    </div>
  );
}
