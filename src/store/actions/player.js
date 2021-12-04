export const PLAY_MUSIC = 'PLAY_MUSIC';
export const RANDOM_MUSIC_REQUEST = 'RANDOM_MUSIC_REQUEST';
export const PLAYLIST_RESEARCH = 'PLAYLIST_RESEARCH'

export const startedPlayMusic = (payload) => (
    {
        type: PLAY_MUSIC,
        payload
    }
)

export const playlist_research = (payload) => (
    {
        type: PLAYLIST_RESEARCH,
        payload
    }
)