import "./DetailMusicPage.scss";

import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { ButtonIcon } from "../../../../../../components/buttons/button-icon/ButtonIcon";
import { PopupMenu } from "../../../../../../components/buttons/popup-menu/PopupMenu";
import { Header } from "./../../components/header/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DetailMusicPage = () => {
    const detail = useSelector((state) => state.musicDetailSelected);
    const navigator = useNavigate();

    const requestImage300 = (imageUrl) => {
        // https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/53/7a/ff/537aff94-5544-773f-1de8-fb0a51160bbd/source/100x100bb.jpg
        return imageUrl?.replace("100x100bb.jpg", "250x250bb.jpg");

        // return imageUrl;
    };

    useEffect(() => {
        if (!detail.trackId) {
            navigator("/listener/playlist");
        }
    });

    return (
        <>
            <Header pathName="/listener/playlist" />

            <section className="music-detail">
                <div className="music-detail__content">
                    <figure className="music-detail__content__figure">
                        <div className="music-detail__content__figure__container">
                            <img className="music-detail__content__figure__container__image"
                                src={requestImage300(detail.artworkUrl100)}
                                alt="art work"
                            />

                            <div className="music-detail__content__figure__container__middle">
                                {/* <FontAwesomeIcon className="music-detail__content__figure__container__middle__icon" icon={faPlay} size="1x" color="#00FFF5" /> */}
                                <div className="music-detail__content__figure__container__middle__icon"> John Joe </div>
                            </div>
                        </div>
                        <div className="music-detail__content__figure__labels">
                            <label>{detail.trackName}</label>
                            <label>{detail.artistName}</label>
                        </div>
                    </figure>
                </div>
                <div className="music-detail__description">
                    <div className="music-detail__description__details">
                        <label>
                            <span>{detail.currency}</span> {detail.trackPrice}
                        </label>
                        <label>{detail.primaryGenreName}</label>

                        <PopupMenu />
                    </div>

                    <div className="music-detail__description__buttons">
                        <ButtonIcon
                            icon={faApple}
                            label="Artista"
                            url={detail.artistViewUrl}
                        ></ButtonIcon>
                        <ButtonIcon
                            icon={faApple}
                            label="Música"
                            url={detail.trackViewUrl}
                        ></ButtonIcon>
                        <ButtonIcon
                            icon={faApple}
                            label="Album"
                            url={detail.collectionViewUrl}
                        ></ButtonIcon>
                    </div>
                </div>
            </section>
        </>
    );
};
