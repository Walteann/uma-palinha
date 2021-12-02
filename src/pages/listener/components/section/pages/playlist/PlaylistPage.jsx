import './PlaylistPage.scss';

import { useEffect, useState } from 'react';

import { ItunesService } from '../../../../../../services/ItunesService';
import { CardPlaylistDisc } from '../../components/card-playlist-disc/CardPlaylistDisc';
import { ApiError } from './../../../../../../components/errors/ApiError';
import { If } from './../../../../../../components/if/If';
import { InputText } from './../../../../../../components/if/input-text/InputText';
import { Header } from './../../components/header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { startedPlayMusic, randomMusicRequest } from './../../../../../../store/actions/player';
import { avoidUndefined } from './../../../../../../shared/utils/utils';

export const PlayListPage = () =>  {

    const [playlist, setPlayList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorApi, setIsErrorApi] = useState(false);
    const [labelMensageSearch, setLabelMensageSearch] = useState('Mais Populares');

    const dispatch = useDispatch();

    let timeout;

    useEffect(() => {
        getMusicsByTerm({term: 'imagine dragons'})
    }, []);

    useSelector(state => {
        if (state?.randomMusicRequest?.isRandom) {
            if (playlist?.length) {
                const {previewUrl, trackName, artistName} = playlist[getRamdonMusic()];
                dispatch(startedPlayMusic({
                    previewUrl,
                    trackName: `${avoidUndefined(trackName)} - ${avoidUndefined(artistName)}`
                }));
            }
            dispatch(randomMusicRequest({isRandom: false}))
        }
    });


    const getMusicsByTerm = async (term) => {
        const { data }  = await ItunesService.searchMusicByTerm(term);
        if (data?.results) {

            setPlayList([...data.results])
            setIsLoading(false);
            setIsErrorApi(false);
        } else {
            setIsLoading(false);
            setIsErrorApi(true);

        }
    }

    const handlerChanges = (event) => {
        try {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (event.target.value) {
                    setIsLoading(true);
                    getMusicsByTerm({ term: event.target.value });
                    setLabelMensageSearch('Resultados sobre: ' + event.target.value);
                }
            }, 1000)
        }   catch(e) {
            setIsLoading(false);
            setIsErrorApi(true);
        }
    }

    const getRamdonMusic = () => Math.floor(Math.random() * playlist.length)
        
    
    return <>
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
            
                {playlist?.map((result, index) => 
                    <CardPlaylistDisc disc={result} key={index}/>
                )}

            </section>
        </If>

        <If condition={isErrorApi}>
            <ApiError />
        </If>

    </>

}