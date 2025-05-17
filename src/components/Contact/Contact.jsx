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

                <form>
                    <div className='form_control'>
                        <label htmlFor="name">Name </label>
                        <input type="text" name='name' />
                    </div>
                    <div className='form_control'>
                        <label htmlFor="name">E-mail </label>
                        <input type="email" name='name' />
                    </div>
                    <div className='form_control'>
                        <label htmlFor="name">Text </label>
                        <textarea type='text' name='name' />
                    </div>
                    <div style={{display: "flex", justifyContent: "end"}}>
                        <Button text = "SUBMIT"></Button>
                    </div>
                </form>
            </div>
            <div className='contact_image'></div>
        </section>
    );
};

export default Contact;