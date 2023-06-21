'use client';
import styles from './index.module.scss';
import Logo from '../logo/Logo';
import Container from '../container/Container';
import UserMenu from './usermenu/UserMenu';
import NavBar from './navbar/NavBar';
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerContainerWrapper">
        <Container>
          <div className={styles.headerContainerWrapperItems}>
            <Logo />
            <NavBar />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
