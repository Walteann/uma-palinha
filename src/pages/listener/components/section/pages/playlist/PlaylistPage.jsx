import './PlaylistPage.scss';

import { useEffect, useState } from 'react';

import { ItunesService } from '../../../../../../services/ItunesService';
import { CardPlaylistDisc } from '../../components/card-playlist-disc/CardPlaylistDisc';
import { ApiError } from './../../../../../../components/errors/ApiError';
import { If } from './../../../../../../components/if/If';
import { InputText } from './../../../../../../components/if/input-text/InputText';
import { Header } from './../../components/header/Header';

export const PlayListPage = () =>  {

    const [playlist, setPlayList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorApi, setIsErrorApi] = useState(false);
    const [labelMensageSearch, setLabelMensageSearch] = useState('Mais Populares');

    let timeout;

    useEffect(() => {
        getMusicsByTerm({term: 'imagine dragons'})
    }, []);


    const getMusicsByTerm = async (term) => {
        const { data } = await ItunesService.searchMusicByTerm(term);
        console.log(data.results);
        setPlayList([...data.results])
        setIsLoading(false);
        setIsErrorApi(false);
    }

    const handlerChanges = (event) => {
        try {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (event.target.value) {
                    setIsLoading(true);
                    console.log(event.target.value);
                    getMusicsByTerm({ term: event.target.value });
                    setLabelMensageSearch('Resultados sobre: ' + event.target.value);
                }
            }, 1000)
        }   catch(e) {
            setIsLoading(false);
            setIsErrorApi(true);
        }
    }
        
    
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