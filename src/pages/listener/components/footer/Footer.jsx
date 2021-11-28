import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faVolumeMute,
    faForward,
    faBackward,
    faRandom,
} from "@fortawesome/free-solid-svg-icons";
import { useLayoutEffect, useState } from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect } from "react/cjs/react.development";
import { If } from './../../../../components/if/If';

const SRC =
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f7/89/fa/f789fa0b-8a5d-bf74-7fa5-0f679d1ceb00/mzaf_15871700748162583897.plus.aac.p.m4a";

export const Footer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState('');

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

    const mutedMusic = () => {
        const audioElement = audioMusicElement();
        console.log(audioElement);
        audioElement.muted = !audioElement.muted;
        console.log(audioElement.muted);
    };

    const audioMusicElement = () =>
        document.getElementsByClassName("audio-element")[0];

    useEffect(() => {
        console.log("Numeros de vezes");
        mutedMusic();
    }, []);

    const updateTimeMusic = () => {
        const interval = setInterval(() => {

            if (audioMusicElement().currentTime !== audioMusicElement().duration) {

                setDuration(getFlooredFixed(audioMusicElement().currentTime / 100, 2));
            } else {
                clearInterval(interval);
            }

        });
    }

    const teste = () => {
        console.log('percetagem: ', calculateProgressBar())
        console.log('total: ', getFlooredFixed(audioMusicElement()?.duration / 100, 2))
    }

    const getFlooredFixed = (value, digit) =>{
        return (Math.floor(value * Math.pow(10, digit)) / Math.pow(10, digit)).toFixed(digit);
    }

    const calculateProgressBar = () => {
        return Number(duration) * 100 / Number(getFlooredFixed(audioMusicElement()?.duration / 100, 2))
    }

    function transformInPercetage(value) {
        return getFlooredFixed(value) * 100;
    }

    return (
        <footer>
            <audio className="audio-element" src={SRC}></audio>
            <div className="progress-bar">
                <h2>{duration}</h2>
                <ProgressBar
                    completed={calculateProgressBar()}
                    height="5px"
                    width="80vw"
                    isLabelVisible={false}
                    bgColor="#00ADB5"
                />
                <If condition={audioMusicElement()?.duration}>

                <h2>{getFlooredFixed(audioMusicElement()?.duration / 100, 2)}</h2>
                </If>
            </div>
            <div className="controls">
                <FontAwesomeIcon
                onClick={teste}
                    icon={faRandom}
                    className="btn-control"
                    size="2x"
                />
                <FontAwesomeIcon
                    icon={faBackward}
                    className="btn-control"
                    size="2x"
                />
                {isPlaying ? (
                    <div className="btn-main" onClick={pauseMusic}>
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
                    icon={faForward}
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
