import React from 'react';
import './Button.css';
import { prependOnceListener } from 'cluster';


const ActionButton = (props) => {
    return(
        <button className={props.buttonstyle}>{props.text}</button>
    )
}

export default ActionButton;