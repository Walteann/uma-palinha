import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ButtonIcon.scss';


export const ButtonIcon = ({ icon, label, url }) => {
    
    return <a  href={url} target="_blank" rel="noreferrer" className="button-icon">
        <FontAwesomeIcon
            icon={icon}
            className="btn-control"
            size="2x"
            color="#FFFFFF"
        />
        <span>{label}</span>
    </a>;
};
