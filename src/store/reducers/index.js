import { combineReducers } from "redux";
import { musicInplayer, musicsPlaylistResearch } from "./music-in-player";
import { musicDetailSelected } from "./music-detail-selected";

export const reducers = combineReducers({
    musicInplayer,
    musicsPlaylistResearch,
    musicDetailSelected
});
