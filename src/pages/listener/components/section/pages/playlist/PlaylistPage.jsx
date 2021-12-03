import './PlaylistPage.scss';

import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ItunesService } from '../../../../../../services/ItunesService';
import { CardPlaylistDisc } from '../../components/card-playlist-disc/CardPlaylistDisc';
import { ApiError } from './../../../../../../components/errors/ApiError';
import { If } from './../../../../../../components/if/If';
import { InputText } from './../../../../../../components/if/input-text/InputText';
import { playlist_research } from './../../../../../../store/actions/player';
import { Header } from './../../components/header/Header';

export const PlayListPage = () => {
    const [playlist, setPlayList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorApi, setIsErrorApi] = useState(false);
    const [labelMensageSearch, setLabelMensageSearch] =
        useState("Mais Populares");

    const dispatch = useDispatch();

    let timeout;

    const getMusicsByTerm = useCallback(async (term) => {
        const { data } = await ItunesService.searchMusicByTerm(term);
        if (data?.results?.length) {
            setPlayList([...data.results]);
            setIsLoading(false);
            setIsErrorApi(false);
            dispatch(playlist_research({musics: data.results}));
        } else {
            setIsLoading(false);
            setIsErrorApi(true);
        }
    }, [dispatch]);

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

    useEffect(() => {
        getMusicsByTerm({term: 'most populate'});
    }, [getMusicsByTerm])

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
