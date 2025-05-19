import React from 'react';
import styles from '../Navigation/Navigation.module.css'
const Navigation = () => {
    return (
        <nav className={`${styles.navigation} container`}>
            <div>
                <img src="/public/images/logo.png" alt="Logo File" />
            </div>
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Blog</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
        </nav>
    );
};

export default Navigation;