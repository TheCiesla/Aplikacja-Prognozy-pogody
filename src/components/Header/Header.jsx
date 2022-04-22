import React from 'react';

import styles from './Header.module.css';
{/* Nagłówek na samej górze. */}
const Header = () => (
    <h1 className={styles.heading}>
        <span className={styles.light}>Prognoza</span> Pogody
    </h1>
);

export default Header;
