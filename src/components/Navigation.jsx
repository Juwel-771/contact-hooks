import React from 'react';

const Navigation = () => {
    return (
        <nav className='container'>
            <div>
                <img src="/public/images/logo.png" alt="Logo File" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navigation;