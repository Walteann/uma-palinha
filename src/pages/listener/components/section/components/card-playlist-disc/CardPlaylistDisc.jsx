import './CardPlaylistDisc.scss';

import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { startedPlayMusic } from './../../../../../../store/actions/player';
import { musicDetailChoice } from './../../../../../../store/actions/musicDetail';
import { avoidUndefined } from './../../../../../../shared/utils/utils';

export const CardPlaylistDisc = (props) => {

    const dispatch = useDispatch();

    const onClickLine = (musicDetail) => {
        console.log('ola');
        dispatch(musicDetailChoice(musicDetail))
    }

    return (
    
        <div className="card-playlist">
            <FontAwesomeIcon
                icon={faPlayCircle}
                size="2x"
                className="card-playlist__play" 
                onClick={() => dispatch(startedPlayMusic({
                    previewUrl: props.disc.previewUrl, 
                    trackName: `${avoidUndefined(props.disc.trackName)} - ${avoidUndefined(props.disc.artistName)}`,
                    trackId: props.disc.trackId
                }))
            } />
                        
            <img className="card-playlist__img" src={props.disc.artworkUrl60} alt={props.disc.trackName} />
            <Link to="/listener/detail" className="card-playlist__trackName" onClick={() => onClickLine(props.disc)}>{props.disc.trackName}</Link>
            <label className="card-playlist__artistName">{props.disc.artistName}</label>
            <label className="card-playlist__primaryGenreName">{props.disc.primaryGenreName}</label>
            <label className="card-playlist__collectionName">{props.disc.collectionName}</label>
            <label className="card-playlist__country">{props.disc.country}</label>
            <label className="card-playlist__trackPrice">{props.disc.trackPrice}</label>
        </div>
    );
} 
