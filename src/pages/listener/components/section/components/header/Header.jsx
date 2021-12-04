import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ToggleTheme } from "./components/toggle-theme/ToggleTheme";
import { useNavigate } from "react-router";

export const Header = (props) => {
    const navigate = useNavigate();

    const onGoBack = () => {
        navigate(props.pathName)
    }

    return (
        <header>
            <FontAwesomeIcon onClick={onGoBack} icon={faChevronLeft} className="btn" size="2x"/>
            <div className="header-icons-right">
                <ToggleTheme />
                <FontAwesomeIcon icon={faLinkedin} className="btn" size="2x"/>
                <FontAwesomeIcon icon={faGithub}  className="btn" size="2x"/>
            </div>
        </header>
    );
}
