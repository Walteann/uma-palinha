import './Footer.scss';

import { faFastBackward, faFastForward, faPause, faPlay, faRandom, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from '@ramonak/react-progress-bar';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { If } from './../../../../components/if/If';
import { NEXT_OR_PREVIEW } from './../../../../shared/constants/next-or-preview.constants';
import { avoidUndefined } from './../../../../shared/utils/utils';
import { startedPlayMusic } from './../../../../store/actions/player';

export const Footer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    const music = useSelector(state => state.musicInplayer);

    const musicsLists = useSelector((state) => state.musicsPlaylistResearch);

    const dispatch = useDispatch();

    const pauseMusic = () => {
        const audioElement = audioMusicElement();
        
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
            if (audioMusicElement()) {

                if (audioMusicElement().currentTime !== audioMusicElement().duration) {
                    
                    setCurrentTime(getFlooredFixed(audioMusicElement().currentTime / 100, 2));
                    setDuration(getFlooredFixed(audioMusicElement()?.duration / 100, 2));
                    
                } else {
                    setIsPlaying(false);
                    clearInterval(interval);
                }
            }

        });
    }, []);

        
    const withoutMusic = useCallback(() => music.previewUrl && music.trackName, [music]);

    const playMusic = useCallback(() => {
        if (withoutMusic()) {
            const audioElement = audioMusicElement();
            audioElement.muted = false;
            audioElement.play();
            updateTimeMusic();
            setIsPlaying(true);
        } else {
            return;
        }
    }, [updateTimeMusic, withoutMusic]);
    

    const getFlooredFixed = (value, digit) => {
        return (Math.floor(value * Math.pow(10, digit)) / Math.pow(10, digit)).toFixed(digit);
    }

    const getRamdonMusic = () => Math.floor(Math.random() * musicsLists.musics.length);

    const findByIndexMusic = (trackId) =>
        musicsLists.musics.findIndex((music) => music.trackId === trackId);

    const randomMusicList = () => {
        if (musicsLists?.musics?.length) {
            const { previewUrl, trackName, artistName, trackId } =
            musicsLists.musics[getRamdonMusic()];
            dispatch(
                startedPlayMusic({
                    previewUrl,
                    trackName: `${avoidUndefined(
                        trackName
                    )} - ${avoidUndefined(artistName)}`,
                    trackId
                })
            );
        }
    }

    const onNextOrPreviewMusic = (trackId, status) => {

        if (trackId) {
            let index = findByIndexMusic(trackId
            );
            if (
                NEXT_OR_PREVIEW.increment === status
            ) {
                if (index > 0 &&  (index + 1) < musicsLists?.musics?.length) {
                    // PODE FAZER INCREMENT
                    const { previewUrl, trackName, artistName, trackId } =
                musicsLists.musics[index + 1];
                    dispatch(
                        startedPlayMusic({
                            previewUrl,
                            trackName: `${avoidUndefined(
                                trackName
                            )} - ${avoidUndefined(artistName)}`,
                            trackId
                        })
                    );
                }
            }

            if (NEXT_OR_PREVIEW.decrement === status) {
                if (index > 0) {
                    // PODE FAZER DECREMENT
                    const { previewUrl, trackName, artistName, trackId } =
                musicsLists.musics[index - 1];
                    dispatch(
                        startedPlayMusic({
                            previewUrl,
                            trackName: `${avoidUndefined(
                                trackName
                            )} - ${avoidUndefined(artistName)}`,
                            trackId
                        })
                    );
                }
            }

        }
    }

    useEffect(() => {
        if (music.previewUrl) {
            playMusic();
        }
    }, [music, playMusic]);

    return (
        <footer>
            <span className="music-name">{music.trackName}</span>
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
                    onClick={() => randomMusicList()}
                />
                <FontAwesomeIcon
                    icon={faFastBackward}
                    className="btn-control"
                    size="2x"
                    onClick={() => onNextOrPreviewMusic(music.trackId, NEXT_OR_PREVIEW.decrement)}
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
                    onClick={() => onNextOrPreviewMusic(music.trackId, NEXT_OR_PREVIEW.increment)}
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
