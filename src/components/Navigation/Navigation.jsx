import React from 'react';
import styles from '../Navigation/Navigation.module.css'
const Navigation = () => {
    return (
        <nav className={`${styles.navigation} container`}>
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