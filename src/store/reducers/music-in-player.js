
import { PLAY_MUSIC } from './../actions/player';
const initalValue = {
    previewUrl: ''
}
// const initalValue = {
//     valores: []
// }

export const musicInplayer = (state = initalValue, action) => {

    switch(action.type) {
        case PLAY_MUSIC:
            console.log(action.payload);
            return {
                ...state,
                previewUrl: action.payload
                // valores: [...state.valores, action.payload]
            }


        default:
            return state;
    }

}