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
        // src: '/video/snb_20250615.mp4',
        src: 'https://freesoul-cam.b-cdn.net/snb_20250615.mp4',
        description: 'Slappers and Bangers, June 15th 2025, Pittsburgh, PA',
        category: 'Events',
    },
    {
        id: '2',
        src: 'https://freesoul-cam.b-cdn.net/belvs_20250607.mp4',
        description: 'Pink Pony Club, June 7th 2025, Pittsburgh, PA',
        category: 'Events'
    }
];
