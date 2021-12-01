import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { If } from './../If';


const inputText = {
    width: '100%',
    outline: 'none',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 254, 0.10)',
    color: '#fbfbfbab',
    padding: '15px',
    fontSize: '16px'
}

const inputControl = {
    position: 'relative',
    margin: '0px 86px 0 62px',
    maxWidth: '500px'
}

const iconSpinner = {
    position: 'absolute',
    right: '-20px',
    top: '8px',
    color: '#00ADB5'
}

export const InputText = (props) => {

    return (
        <div style={inputControl}>
            <input 
                type="text" 
                style={inputText} 
                placeholder={props.placeholder} 
                onKeyUp={(event) => props.change(event)} 
            />

            <If condition={props.isLoading}>
                <FontAwesomeIcon style={iconSpinner} className="spinner" icon={faSpinner} size="2x"/>
            </If>
        </div>
    );
}