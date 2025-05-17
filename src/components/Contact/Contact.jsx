import React from 'react';
import './Contact.css'
import Button from '../Button/Button';

const Contact = () => {
    return (
        <section className='container'>
            <div className='contact_form'>
                <Button text = "SUPPORT CALLS"></Button>
            </div>
            <div className='contact_image'></div>
        </section>
    );
};

export default Contact;