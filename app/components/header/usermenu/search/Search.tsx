'use client';

import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './index.module.scss';

const Search: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = React.useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div>
      {isOpen ? (
        <div className={styles.searchContainer}>
          <div className={styles.searchContainerItems}>
            <button>
              <FiSearch onClick={toggleOpen} className={styles.searchContainerItemsisOpenBtn} />
            </button>
            <input type="text" placeholder="Поиск" className={styles.searchContainerItemsInput} />
          </div>
          <div className=""></div>
        </div>
      ) : (
        <FiSearch onClick={toggleOpen} className={styles.searchContainerItemsBtn} />
      )}
    </div>
  );
};

export default Search;
