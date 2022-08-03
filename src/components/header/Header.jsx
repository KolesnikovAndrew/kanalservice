import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import logoMobile from "../../assets/logoMobile.png";
import logout from "../../assets/logout.png";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../store/actions";
import { useNavigate } from "react-router-dom";
function Header() {
  const { isAuth, authUser } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    dispatch(actions.logout());
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logoMobile} className={styles.logo__mobile}></img>
          <h1>Каналсервис</h1>
        </div>

        {isAuth && (
          <div className={styles.nav__logout}>
            <p className={styles.userlogin}>{authUser.login}</p>
            <img src={logout} className={styles.logout} onClick={Logout}></img>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
