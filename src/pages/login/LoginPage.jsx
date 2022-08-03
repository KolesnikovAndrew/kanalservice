import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUserAsync } from "../../store/reducers/thunks";
import actions from "../../store/actions/index";

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { isAuth, authUser } = useSelector((state) => state);
  authUser.length === 0 && dispatch(getAuthUserAsync());

  //Check if input data is equal to registered user
  const [inputData, setInputData] = useState({
    login: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    authUser.login != e.target.value && e.target.value != ""
      ? setLoginError(true)
      : setLoginError(false);

    authUser.password != e.target.value && e.target.value != ""
      ? setPasswordError(true)
      : setPasswordError(false);
  };

  useEffect(() => {
    if (
      authUser.login === inputData.login &&
      authUser.password == inputData.password
    ) {
      dispatch(actions.login());
      navigate("/posts");
    }
  }, [inputData]);

  return (
    <div className={styles.login}>
      <h2>Autorization</h2>
      <form className={styles.login__form}>
        <div className={styles.input__container}>
          <label for="login" className={styles.input__label}>
            login
          </label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              id="login"
              name="login"
              onChange={handleInputChange}
            />
            {loginError && <span className={styles.error}>Invalid Login</span>}
          </div>
        </div>

        <div className={styles.input__container}>
          <label for="password" className={styles.input__label}>
            password
          </label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInputChange}
            />
            {passwordError && (
              <span className={styles.error}>Invalid Password</span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
