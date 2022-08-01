import React from "react";
import styles from "./Login.module.scss";
function Login() {
  return (
    <div className={styles.login}>
      <h1>Autorization</h1>
      <form className={styles.login__form}>
        <label for="login" className={styles.input__label}>
          login
        </label>
        <input type="text" id="login" name="login" />
        <label for="password" className={styles.input__label}>
          password
        </label>
        <input type="text" id="password" name="password" />
      </form>
    </div>
  );
}

export default Login;
