import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import { connect } from "react-redux";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.App}>
        <Header />
        <Login />
      </div>
    );
  }
}

export default connect((state) => ({ state }), {})(App);
