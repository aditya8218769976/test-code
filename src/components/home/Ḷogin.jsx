import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("main");
  };
  return (
    <button type="submit" onClick={clickHandler}>
      Login Please
    </button>
  );
};

export default Login;
