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
        src: 'https://player.vimeo.com/video/1098274583?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        description: 'Slappers and Bangers, June 15th 2025, Pittsburgh, PA',
        category: 'Events',
    },
    {
        id: '2',
        src: 'https://player.vimeo.com/video/1098274502?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        description: 'Pink Pony Club, June 7th 2025, Pittsburgh, PA',
        category: 'Events'
    }
];
