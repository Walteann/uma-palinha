import { MUSIC_DETAIL } from './../actions/musicDetail';

export const musicDetailSelected = (state = {}, action) => {
    switch(action.type) {

        case MUSIC_DETAIL:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}