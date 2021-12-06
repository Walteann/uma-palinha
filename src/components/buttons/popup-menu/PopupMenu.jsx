import "./PopupMenu.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faList } from "@fortawesome/free-solid-svg-icons";

export const PopupMenu = () => {

    const onDispatchPlayMusic = () => {
        console.log('aqui despatch to list')
    }

    return (
        <div class="wrapper-popup">
            <input type="checkbox" />
            <div class="fab"></div>
            <div class="fac">
                {/* <FontAwesomeIcon icon={faPlay} size="1x" color="#00FFF5" /> */}

                <FontAwesomeIcon icon={faList} size="1x" color="#00FFF5" onClick={onDispatchPlayMusic}/>
            </div>
        </div>
    );
};
