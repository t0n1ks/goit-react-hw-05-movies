import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module/AppBar.module.css';

function AppBar() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink exact="true" to="/" className={styles.navLink} activeclassname={styles.activeNavLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink exact="true" to="/movies" className={styles.navLink} activeclassname={styles.activeNavLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppBar;
