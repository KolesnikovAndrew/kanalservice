import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import { connect } from "react-redux";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Posts from "./pages/posts/Posts";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Login />
        {/* <Posts /> */}
      </div>
    );
  }
}

export default connect((state) => ({ state }), {})(App);
