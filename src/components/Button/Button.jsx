import React from 'react';
import './Button.css';
import { RiMessage3Fill } from "react-icons/ri";


const Button = (props) => {
    return (
        <button className={props.isOutline ? "outline_btn" : "primary_btn"}>
            {props.icon}
            {props.text}
        </button>
    );
};

export default Button;