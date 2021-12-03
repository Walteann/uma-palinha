export const PLAY_MUSIC = 'PLAY_MUSIC';
export const RANDOM_MUSIC_REQUEST = 'RANDOM_MUSIC_REQUEST';
export const NEXT_MUSIC = 'NEXT_MUSIC';
export const PREVIEW_MUSIC = 'PREVIEW_MUSIC';

export const startedPlayMusic = (payload) => (
    {
        type: PLAY_MUSIC,
        payload
    }
)

export const randomMusicRequest = (payload) => (
    {
        type: RANDOM_MUSIC_REQUEST,
        payload
    }
)

export const nextMusic = (payload) => (
    {
        type: NEXT_MUSIC,
        payload
    }
)

export const previewMusic = (payload) => (
    {
        type: PREVIEW_MUSIC,
        payload
    }
)