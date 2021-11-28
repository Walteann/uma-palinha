import { useEffect, useState } from 'react';

import { ItunesService } from '../../../../../../services/ItunesService';
import { CardPlaylistDiscCover } from './../../components/card-playlist-disc-cover/CardPlaylistDiscCover';
import { Header } from './../../components/header/Header';
import './PlaylistPage.scss';

export const PlayListPage = () =>  {

    const [playlist, setPlayList] = useState([]);


    useEffect(() => {
        getMusicsByTerm({term: 'imagine dragons'})
    }, []);


    const getMusicsByTerm = async (term) => {
        const { data } = await ItunesService.searchMusicByTerm(term);

        console.log(data);

        setPlayList([...data.results])

    }
        
    
    return <>
        <Header />
        <h3>Play List</h3>
        <hr />

        <section>

            <div className="result-search">
                {playlist?.map(result => <CardPlaylistDiscCover key={result.trackId} disc={result} />)}
            </div>

            

        </section>
    </>

}