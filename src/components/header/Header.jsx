import React from "react";
import styles from "./Header.module.scss";
import logoMobile from "../../assets/logoMobile.png";
import logout from "../../assets/logout.png";
import { useSelector } from "react-redux";

function Header() {
  const { isAuth } = useSelector((state) => state);

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <img src={logoMobile} className={styles.logo__mobile}></img>
        {isAuth && <img src={logout} className={styles.logout}></img>}
      </nav>
    </div>
  );
}

export default Header;
