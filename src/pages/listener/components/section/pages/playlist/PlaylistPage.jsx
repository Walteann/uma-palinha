import './PlaylistPage.scss';

import { useEffect, useState } from 'react';

import { ItunesService } from '../../../../../../services/ItunesService';
import { CardPlaylistDisc } from '../../components/card-playlist-disc/CardPlaylistDisc';
import { Header } from './../../components/header/Header';

export const PlayListPage = () =>  {

    const [playlist, setPlayList] = useState([]);


    useEffect(() => {
        getMusicsByTerm({term: 'imagine dragons'})
    }, []);


    const getMusicsByTerm = async (term) => {
        const { data } = await ItunesService.searchMusicByTerm(term);
        setPlayList([...data.results])
    }
        
    
    return <>
        <Header />
        <h3>Play List</h3>
        <hr />

        <section className="section-playlist">
          
            {playlist?.map(result => 
                <CardPlaylistDisc disc={result} key={result.trackId}/>
            )}

        </section>
    </>

}