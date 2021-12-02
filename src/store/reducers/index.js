import { combineReducers } from "redux";
import { musicInplayer, randomMusicRequest } from "./music-in-player";

export const reducers = combineReducers({
    musicInplayer,
    randomMusicRequest
});
