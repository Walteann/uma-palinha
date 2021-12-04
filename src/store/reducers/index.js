import { combineReducers } from "redux";
import { musicInplayer, musicsPlaylistResearch } from "./music-in-player";

export const reducers = combineReducers({
    musicInplayer,
    musicsPlaylistResearch
});
