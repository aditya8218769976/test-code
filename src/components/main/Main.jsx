import React from "react";
import "../main/Main.css";
import Timer from "../timer/Timer";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="main-style">
      <Timer />
      <div className="link-style">
        <Link to="/">LogOut</Link>
      </div>
    </div>
  );
};

export default Main;
