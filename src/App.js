import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import { connect } from "react-redux";
import Header from "./components/header/Header";
import LoginPage from "./pages/login/LoginPage";
import Posts from "./pages/posts/Posts";
import { Route, Routes } from "react-router";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </div>
    );
  }
}

export default connect((state) => ({ state }), {})(App);
