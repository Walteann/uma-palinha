import './Footer.scss';

import { faFastBackward, faFastForward, faPause, faPlay, faRandom, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from '@ramonak/react-progress-bar';
import { useState } from 'react';

import { If } from './../../../../components/if/If';

const SRC =
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f7/89/fa/f789fa0b-8a5d-bf74-7fa5-0f679d1ceb00/mzaf_15871700748162583897.plus.aac.p.m4a";

export const Footer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    function changeMainButton() {
        setIsPlaying(!isPlaying);
    }

    const playMusic = () => {
        const audioElement = audioMusicElement();
        audioElement.muted = false;
        audioElement.play();
        updateTimeMusic();
        console.log(audioElement);
        changeMainButton();
    };

    const pauseMusic = () => {
        const audioElement = audioMusicElement();
        console.log(audioElement);

        audioElement.pause();
        changeMainButton();
    };

    
    const audioMusicElement = () =>
    document.getElementsByClassName("audio-element")[0];
    
    const mutedMusic = () => {
        const audioElement = audioMusicElement();
        audioElement.muted = !audioElement.muted;
    };


    const updateTimeMusic = () => {
        const interval = setInterval(() => {
            if (audioMusicElement().currentTime !== audioMusicElement().duration) {
                
                setCurrentTime(getFlooredFixed(audioMusicElement().currentTime / 100, 2));
                setDuration(getFlooredFixed(audioMusicElement()?.duration / 100, 2));
                
            } else {
                setIsPlaying(false);
                clearInterval(interval);
            }

        });
    }

    const getFlooredFixed = (value, digit) =>{
        return (Math.floor(value * Math.pow(10, digit)) / Math.pow(10, digit)).toFixed(digit);
    }

    return (
        <footer>
            <audio className="audio-element" src={SRC}></audio>
            <div className="progress-bar">
                <h2>{currentTime}</h2>
                <ProgressBar
                    completed={currentTime}
                    maxCompleted={Number(duration)}
                    transitionDuration="1s"
                    transitionTimingFunction="linear"
                    height="5px"
                    width="80vw"
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
