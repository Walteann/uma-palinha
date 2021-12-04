
import { PLAY_MUSIC, PLAYLIST_RESEARCH } from './../actions/player';
const initalValue = {
    previewUrl: null,
    trackName: null,
    trackId: null
}

export const initalValueNextOrPreview = {
    trackId: null,
    status: null
}

const initalMusics = {
    musics: []
}

export const musicInplayer = (state = initalValue, action) => {

    switch(action.type) {
        case PLAY_MUSIC:
            return {
                ...state,
                previewUrl: action.payload.previewUrl,
                trackName: action.payload.trackName,
                trackId: action.payload.trackId
            }

        default:
            return state;
    }

}

export const musicsPlaylistResearch = (state = initalMusics, action) => {

    switch(action.type) {
        case PLAYLIST_RESEARCH:
            return {
                ...state,
                ...action.payload
            }
            

        default:
            return state;

    }

}