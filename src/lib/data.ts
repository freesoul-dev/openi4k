export const ALL_CATEGORIES = ['Events', 'Drone', 'Documentary', 'Music'] as const;

export type VideoCategory = typeof ALL_CATEGORIES[number];

export interface Video {
    id: string;
    src: string;
    description: string;
    category: VideoCategory;
}

export const videos: Video[] = [
    {
        id: '1',
        src: 'https://bzysov8ydzptmtf9.public.blob.vercel-storage.com/snb_20250615.mp4',
        description: 'Slappers and Bangers, June 15th 2025, Pittsburgh, PA',
        category: 'Events',
    },
    {
        id: '2',
        src: 'https://bzysov8ydzptmtf9.public.blob.vercel-storage.com/belvs_20250607.mp4',
        description: 'Pink Pony Club, June 7th 2025, Pittsburgh, PA',
        category: 'Events'
    }
];
