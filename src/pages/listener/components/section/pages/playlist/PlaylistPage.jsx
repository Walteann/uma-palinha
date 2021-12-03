import "./PlaylistPage.scss";

import { useEffect, useState } from "react";

import { ItunesService } from "../../../../../../services/ItunesService";
import { CardPlaylistDisc } from "../../components/card-playlist-disc/CardPlaylistDisc";
import { ApiError } from "./../../../../../../components/errors/ApiError";
import { If } from "./../../../../../../components/if/If";
import { InputText } from "./../../../../../../components/if/input-text/InputText";
import { Header } from "./../../components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import {
    startedPlayMusic,
    randomMusicRequest,
    previewMusic,
    nextMusic
} from "./../../../../../../store/actions/player";
import { avoidUndefined } from "./../../../../../../shared/utils/utils";
import { NEXT_OR_PREVIEW } from "./../../../../../../shared/constants/next-or-preview.constants";
import { initalValueNextOrPreview } from "../../../../../../store/reducers/music-in-player";

export const PlayListPage = () => {
    const [playlist, setPlayList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorApi, setIsErrorApi] = useState(false);
    const [labelMensageSearch, setLabelMensageSearch] =
        useState("Mais Populares");

    const dispatch = useDispatch();

    let timeout;

    useEffect(() => {
        getMusicsByTerm({ term: "imagine dragons" });
    }, []);

    useSelector((state) => {
        if (playlist?.length) {
            if (state?.randomMusicRequest?.isRandom) {
                const { previewUrl, trackName, artistName } =
                    playlist[getRamdonMusic()];
                dispatch(
                    startedPlayMusic({
                        previewUrl,
                        trackName: `${avoidUndefined(
                            trackName
                        )} - ${avoidUndefined(artistName)}`,
                    })
                );
                dispatch(randomMusicRequest({ isRandom: false }));
            }

            if (state?.nextOrPreviewMusic?.trackId && state?.nextOrPreviewMusic?.status) {
                let index = findByIndexMusic(
                    state?.nextOrPreviewMusic?.trackId
                );
                if (
                    NEXT_OR_PREVIEW.increment ===
                    state?.nextOrPreviewMusic?.status
                ) {
                    if (index > 0 &&  (index + 1) < playlist.length) {
                        // PODE FAZER INCREMENT
                        const { previewUrl, trackName, artistName, trackId } =
                    playlist[index + 1];
                        dispatch(
                            startedPlayMusic({
                                previewUrl,
                                trackName: `${avoidUndefined(
                                    trackName
                                )} - ${avoidUndefined(artistName)}`,
                                trackId
                            })
                        );
                    }
                    dispatch(nextMusic(initalValueNextOrPreview))
                }

                if (NEXT_OR_PREVIEW.decrement === state?.nextOrPreviewMusic?.status) {
                    if (index > 0) {
                        // PODE FAZER DECREMENT
                        const { previewUrl, trackName, artistName, trackId } =
                    playlist[index - 1];
                        dispatch(
                            startedPlayMusic({
                                previewUrl,
                                trackName: `${avoidUndefined(
                                    trackName
                                )} - ${avoidUndefined(artistName)}`,
                                trackId
                            })
                        );
                    }
                    dispatch(previewMusic(initalValueNextOrPreview))
                }

            }
        }
    });

    const getMusicsByTerm = async (term) => {
        const { data } = await ItunesService.searchMusicByTerm(term);
        if (data?.results?.length) {
            setPlayList([...data.results]);
            setIsLoading(false);
            setIsErrorApi(false);
        } else {
            setIsLoading(false);
            setIsErrorApi(true);
        }
    };

    const handlerChanges = (event) => {
        try {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (event.target.value) {
                    setIsLoading(true);
                    getMusicsByTerm({ term: event.target.value });
                    setLabelMensageSearch(
                        "Resultados sobre: " + event.target.value
                    );
                }
            }, 1000);
        } catch (e) {
            setIsLoading(false);
            setIsErrorApi(true);
        }
    };

    const getRamdonMusic = () => Math.floor(Math.random() * playlist.length);

    const findByIndexMusic = (trackId) =>
        playlist.findIndex((music) => music.trackId === trackId);

    return (
        <>
            <Header />

            <InputText
                placeholder="Buscar por termo"
                change={handlerChanges}
                isLoading={isLoading}
            />
            <h3 className="label-result">{labelMensageSearch}</h3>
            <hr />
            <If condition={!isErrorApi}>
                <section className="section-playlist">
                    {playlist?.map((result, index) => (
                        <CardPlaylistDisc disc={result} key={index} />
                    ))}
                </section>
            </If>

            <If condition={isErrorApi}>
                <ApiError />
            </If>
        </>
    );
};
