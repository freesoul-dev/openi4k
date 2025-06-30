export const ALL_CATEGORIES = ['Nature', 'Travel', 'Animals', 'Tech', 'Food'] as const;

export type VideoCategory = typeof ALL_CATEGORIES[number];

export interface Video {
    id: string;
    src: string;
    description: string;
    category: VideoCategory;
}

export const videos: Video[] = [
    {
        id: '9',
        src: 'https://storage.googleapis.com/web-dev-assets/video-canvas/vertical.mp4',
        description: 'A beautiful day at the beach, captured in portrait mode to show off the vertical video support!',
        category: 'Travel',
    },
    {
        id: '1',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        description: 'Chasing waterfalls and dreams. What a view!',
        category: 'Travel'
    },
    {
        id: '2',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        description: 'The great outdoors is calling my name.',
        category: 'Nature'
    },
    {
        id: '3',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        description: 'A day with these majestic elephants. Unforgettable.',
        category: 'Animals'
    },
    {
        id: '4',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        description: 'Nothing beats a warm fire on a cold night.',
        category: 'Nature'
    },
    {
        id: '5',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        description: 'Chocolate lava cake perfection. My new favorite recipe!',
        category: 'Food'
    },
     {
        id: '6',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        description: 'A short story about a girl and her dragon.',
        category: 'Tech'
    },
    {
        id: '7',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        description: 'Taking the scenic route. On and off the road.',
        category: 'Travel'
    },
    {
        id: '8',
        src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        description: 'Sneak peek into a world of science fiction and giant robots.',
        category: 'Tech'
    }
];
