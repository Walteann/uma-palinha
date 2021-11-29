import './CardPlaylistDisc.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export const CardPlaylistDisc = (props) => (

    <div className="card-playlist">
         <FontAwesomeIcon
                    icon={faPlayCircle}
                    size="2x"
                    className="card-playlist__play" />
                    
        <img className="card-playlist__img" src={props.disc.artworkUrl60} alt={props.disc.trackName} />
        <Link to="/listener/detail" className="card-playlist__trackName">{props.disc.trackName}</Link>
        <label className="card-playlist__artistName">{props.disc.artistName}</label>
        <label className="card-playlist__primaryGenreName">{props.disc.primaryGenreName}</label>
        <label className="card-playlist__collectionName">{props.disc.collectionName}</label>
        <label className="card-playlist__country">{props.disc.country}</label>
        <label className="card-playlist__trackPrice">{props.disc.trackPrice}</label>
    </div>
);
