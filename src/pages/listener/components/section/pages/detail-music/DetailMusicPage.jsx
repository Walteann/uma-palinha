import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Header } from './../../components/header/Header';
import './DetailMusicPage.scss';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DetailMusicPage = () =>  {

    const detail = useSelector(state => state.musicDetailSelected);
    const navigator = useNavigate();


    const requestImage300 = (imageUrl) => {
        // https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/53/7a/ff/537aff94-5544-773f-1de8-fb0a51160bbd/source/100x100bb.jpg
        return imageUrl?.replace('100x100bb.jpg', '250x250bb.jpg');

        // return imageUrl;
    }

    useEffect(() => {
        if (!detail.trackId) {
            navigator('/listener/playlist')
        }
    })

    return (
        <>
            <Header pathName="/listener/playlist" />

            <section className="music-detail">
                <div className="music-detail__figure">
                    <figure>
                        <img src={requestImage300(detail.artworkUrl100)} alt="" />
                        <label>{detail.trackName}</label>
                    </figure>
                </div>
                <div className="music-detail__description">

                    <div className="music-detail__description__details">
                        <label><span>Música: </span>{detail.trackName}</label>
                        <label><span>Artista: </span>{detail.artistName}</label>
                        <label><span>Preço: </span>{detail.trackPrice}</label>
                        <label><span>País: </span>{detail.country}</label>
                    </div>

                    <div className="music-detail__description__buttons">
                        <button className="music-detail__description__buttons__btn">
                        <FontAwesomeIcon
                            icon={faApple}
                            className="btn-control"
                            size="2x"
                            color="#FFFFFF"
                        />
                            <span>MUSIC
                            </span> 
                        </button>   
                        <button className="music-detail__description__buttons__btn">
                        <FontAwesomeIcon
                            icon={faApple}
                            className="btn-control"
                            size="2x"
                            color="#FFFFFF"
                        />
                            <span>Album
                            </span> 
                        </button>   
                        <button className="music-detail__description__buttons__btn">
                        <FontAwesomeIcon
                            icon={faApple}
                            className="btn-control"
                            size="2x"
                            color="#FFFFFF"
                        />
                            <span>Artista
                            </span> 
                        </button>   
                    </div>
                </div>
            </section>

        </>
    )
} 