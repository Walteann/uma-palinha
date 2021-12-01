
import { PLAY_MUSIC } from './../actions/player';
const initalValue = {
    previewUrl: null,
    trackName: null
}

export const musicInplayer = (state = initalValue, action) => {

    switch(action.type) {
        case PLAY_MUSIC:
            console.log(action.payload);
            return {
                ...state,
                previewUrl: action.payload.previewUrl,
                trackName: action.payload.trackName
            }


        default:
            return state;
    }

}