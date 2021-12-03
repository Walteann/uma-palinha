import { combineReducers } from "redux";
import { musicInplayer, randomMusicRequest, nextOrPreviewMusic } from "./music-in-player";

export const reducers = combineReducers({
    musicInplayer,
    randomMusicRequest,
    nextOrPreviewMusic
});
