import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Header = () => (
    <header>
        <FontAwesomeIcon icon={faChevronLeft} className="btn" size="2x"/>
        <div className="header-icons-right">
            <div>
                {/* TODO: Colocara qui dps o Modo Dark */}
                <label>Modo Dark</label>
                <input type="checkbox" />
            </div>
            <FontAwesomeIcon icon={faLinkedin} className="btn" size="2x"/>
            <FontAwesomeIcon icon={faGithub}  className="btn" size="2x"/>
        </div>
    </header>
);
