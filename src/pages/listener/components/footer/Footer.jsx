import './Footer.scss';

import { faFastBackward, faFastForward, faPause, faPlay, faRandom, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from '@ramonak/react-progress-bar';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { If } from './../../../../components/if/If';

export const Footer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    const music = useSelector(state => state.musicInplayer);

    const pauseMusic = () => {
        const audioElement = audioMusicElement();
        console.log(audioElement);
        
        audioElement.pause();
        setIsPlaying(false);
    };

    
    const audioMusicElement = () =>
    document.getElementsByClassName("audio-element")[0];
    
    const mutedMusic = () => {
        const audioElement = audioMusicElement();
        audioElement.muted = !audioElement.muted;
    };

    const updateTimeMusic = useCallback(() => {
        const interval = setInterval(() => {
            if (audioMusicElement().currentTime !== audioMusicElement().duration) {
                
                setCurrentTime(getFlooredFixed(audioMusicElement().currentTime / 100, 2));
                setDuration(getFlooredFixed(audioMusicElement()?.duration / 100, 2));
                
            } else {
                setIsPlaying(false);
                clearInterval(interval);
            }

        });
    }, []);

        
    const playMusic = useCallback(() => {
        const audioElement = audioMusicElement();
        audioElement.muted = false;
        audioElement.play();
        updateTimeMusic();
        setIsPlaying(true);
    }, [updateTimeMusic]);
    

    const getFlooredFixed = (value, digit) =>{
        return (Math.floor(value * Math.pow(10, digit)) / Math.pow(10, digit)).toFixed(digit);
    }

    useEffect(() => {

        if (music.previewUrl) {
            playMusic();
        }

    }, [music, playMusic]);

    return (
        <footer>
            <span style={{color: '#FFFFFF'}}>{music.previewUrl}</span>
            <audio className="audio-element" src={music.previewUrl}></audio>
            <div className="progress-bar">
                <h2>{currentTime}</h2>
                <ProgressBar
                    completed={currentTime}
                    maxCompleted={Number(duration)}
                    transitionDuration="1s"
                    transitionTimingFunction="linear"
                    height="5px"
                    width="70vw"
                    isLabelVisible={false}
                    bgColor="#00ADB5"
                />
                <If condition={audioMusicElement()?.duration}>

                <h2>{duration}</h2>
                </If>
            </div>
            <div className="controls">
                <FontAwesomeIcon
                    icon={faRandom}
                    className="btn-control"
                    size="2x"
                />
                <FontAwesomeIcon
                    icon={faFastBackward}
                    className="btn-control"
                    size="2x"
                />
                {isPlaying ? (
                    <div className="btn-main btn-main--active" onClick={pauseMusic}>
                        <FontAwesomeIcon
                            icon={faPause}
                            className="btn-control-main"
                            size="2x"
                            color="#00ADB5"
                        />
                    </div>
                ) : (
                    <div className="btn-main" onClick={playMusic}>
                        <FontAwesomeIcon
                            icon={faPlay}
                            className="btn-control-main"
                            size="2x"
                        />
                    </div>
                )}
                <FontAwesomeIcon
                    icon={faFastForward}
                    className="btn-control"
                    size="2x"
                />
                <FontAwesomeIcon
                    onClick={mutedMusic}
                    icon={faVolumeMute}
                    className="btn-control"
                    size="2x"
                />
            </div>
        </footer>
    );
};
