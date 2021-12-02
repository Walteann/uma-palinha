
import { PLAY_MUSIC, RANDOM_MUSIC_REQUEST } from './../actions/player';
const initalValue = {
    previewUrl: null,
    trackName: null
}

const initalValueRandom = {
    isRandom: false
}

export const musicInplayer = (state = initalValue, action) => {

    switch(action.type) {
        case PLAY_MUSIC:
            return {
                ...state,
                previewUrl: action.payload.previewUrl,
                trackName: action.payload.trackName
            }

        default:
            return state;
    }

}

export const randomMusicRequest = (state = initalValueRandom, action) => {

    switch(action.type) {
        case RANDOM_MUSIC_REQUEST:
            return {
                ...state,
                isRandom: action.payload.isRandom
            }


        default:
            return state;
    }

}