import React from 'react';
import './Contact.css'
import Button from '../Button/Button';
import { RiMessage3Fill } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { IoIosMailUnread } from "react-icons/io";


const Contact = () => {
    return (
        <section className='contact-container'>
            <div className='contact_form'>
                <div className='top_btn'>
                    <Button text = "SUPPORT CALLS" icon = {<RiMessage3Fill/>}></Button>
                    <Button text = "VIA CALLS" icon = {<MdCall/>}></Button>
                </div>
                <Button isOutline = {true} text = "VIA EMAIL FORM" icon = {<IoIosMailUnread />}></Button>
            </div>
            <div className='contact_image'></div>
        </section>
    );
};

export default Contact;