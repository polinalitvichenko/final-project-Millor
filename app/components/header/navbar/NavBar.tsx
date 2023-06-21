'use client';
import React from 'react';
import styles from './index.module.scss';

const NavBar: React.FC = (): JSX.Element => {
  return (
    <div className={styles.navBarContainer}>
      <ul className={styles.navBarContainerItems}>
        <li className="navBarContainerItemsCatalog">
          <a href="#">Каталог товаров</a>
        </li>
        <li className="navBarContainerItemsBlog">
          <a href="#">Блог</a>
        </li>
        <li className="navBarContainerItemsContacts">
          <a href="#">Контакты</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
