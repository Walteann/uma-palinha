import './ToggleTheme.scss';


import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { If } from './../../../../../../../../components/if/If';



export const ToggleTheme = () =>  {

    const [isCheck, setIsCheck] = useState(false);

    const handlerToggleTheme = event => {
        setIsCheck(event.target.checked);
    } 

    return (
            
        <div className="wrapper" >
            <If condition={!isCheck}>
                <FontAwesomeIcon className="icon-sun" color="#00FFF5" icon={faSun} />
            </If>
            <input type="checkbox" onChange={handlerToggleTheme} />
            <If condition={isCheck}>
                <FontAwesomeIcon className="icon-moon" color="#fbfbfbab" icon={faMoon} />
            </If>
        </div>
    );
}