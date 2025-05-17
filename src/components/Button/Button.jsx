import React from 'react';
import './Button.css';
import { RiMessage3Fill } from "react-icons/ri";


const Button = (props) => {
    return (
        <button className='primary_btn'>
            <RiMessage3Fill fontSize= "24px" />
            {props.text}
        </button>
    );
};

export default Button;