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

            {/* <div className="result-search">
                {playlist?.map(result => <CardPlaylistDiscCover key={result.trackId} disc={result} />)}
            </div> */}

            {/* <table className="table-playlist">
                <tbody>
                    {playlist?.map(result => 
                        <tr key={result.trackId}>
                            <td>
                                <img src={result.artworkUrl60} alt="" />
                            </td>
                            <td>
                                {result.trackName}
                            </td>
                            <td>
                                {result.artistName}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table> */}
          
            {playlist?.map(result => 
                <CardPlaylistDisc disc={result} key={result.trackId}/>
            )}

            

        </section>
    </>

}