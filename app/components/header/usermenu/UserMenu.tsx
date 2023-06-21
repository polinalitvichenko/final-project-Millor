'use client'; 
import { FiUser, FiShoppingCart } from 'react-icons/fi'; 
import React from 'react'; 
import Search from './search/Search'; 
import styles from './index.module.scss'; 
 
const UserMenu: React.FC = (): JSX.Element => { 
  return ( 
    <div className={styles.userMenuContainer}> 
      <ul className={styles.userMenuContainerWrapper}> 
        <li> 
          <button> 
            <Search /> 
          </button> 
        </li> 
        <li> 
          <button> 
            <FiShoppingCart className={styles.userMenuContainerShoppingCardIcon} /> 
          </button> 
        </li> 
        <li> 
          <button> 
            <FiUser className={styles.userMenuContainerUserIcon} /> 
          </button> 
        </li> 
      </ul> 
    </div> 
  ); 
}; 
 
export default UserMenu;

