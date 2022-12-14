import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Main from "../components/main/Main";

const Routes = () => {
  //   const loggedIn = window.localStorage.getItem("isLoggedIn");

  //   console.log(loggedIn, "loggedIn...............");
  return (
    <>
      <Router>
        <Route path="/" exact element={<Home />} />
        <Route path="main" element={<Main />} />
      </Router>
    </>
  );
};

export default Routes;
