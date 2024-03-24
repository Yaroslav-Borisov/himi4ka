import styles from './header.module.css';
import Image from 'next/image';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <a className={styles.header__logo} href="#">
        <Image src="./logo.svg" alt="Himi4ka Logo" width={148} height={34} priority />
      </a>
      <div className={styles.header__linksWrapper}>
        <div className={styles.header__navigationWrapper}>
          <nav className={styles.header__navigation}>
            <a href="#">Курсы</a>
            <a href="#">Статьи</a>
          </nav>
        </div>
        <div className={styles.header__profile}>
          <a href="#">
            <Image src="./profile.svg" alt="Profile icon" width={32} height={32} priority />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
