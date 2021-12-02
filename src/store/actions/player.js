export const PLAY_MUSIC = 'PLAY_MUSIC';
export const RANDOM_MUSIC_REQUEST = 'RANDOM_MUSIC_REQUEST';

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