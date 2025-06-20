import React from 'react';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>AuroraCMS</div>
      <div className={styles.menu}>
        <a href="/">Home</a>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;