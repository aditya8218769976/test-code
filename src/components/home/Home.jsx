import React, { useState } from "react";
import "../home/Home.css";
import Timer from "../timer/Timer";
import { Link } from "react-router-dom";

const Home = () => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const passwordHandler = (e) => {
    setSuccessMessage("");
    setPasswordError("");
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //   checking if password is empty

    if (password !== "") {
      setSuccessMessage("");
    } else {
      setPasswordError("Password is required");
    }
    // checking if password is valid//

    if (password === "adityamishra") {
      setSuccessMessage("Welcome");
    } else {
      setPasswordError("Please fill correct password");
    }
  };

  const rotateHandler = () => {
    setPasswordError(true);
  };
  return (
    <div>
      <div className="door-left">
        <div className="door-left-wrapper">
          <div className="door-left-h2">
            <h2>Java</h2>
          </div>
          <div className="door-left-p">
            <p>
              This course is provisioned by <strong>Nexxt Labs</strong>
            </p>
          </div>
          <div className="door-left-option">
            <div>
              <li>Labs</li>
            </div>
            <div>
              <li>Exercises</li>
            </div>
            <div>
              <li>Do it yourself</li>
            </div>
          </div>
          <div className="door-left-work">
            <div className="door-left-work1 d-flex">
              <div className="door-left-work1-icon">
                <h1>icon</h1>
              </div>
              <div className="door-left-work1">
                <div>
                  <h4>Exercises</h4>
                </div>
                <div className="d-flex">
                  <h2>9</h2>
                  <p>completed out of 84</p>
                </div>
              </div>
            </div>
            <div className="d-flex door-left-work1">
              <div className="door-left-work1-icon">
                <h1>icon</h1>
              </div>
              <div className="door-left-work1">
                <div>
                  <h4>Projects</h4>
                </div>
                <div className="d-flex">
                  <h2>2</h2>
                  <p>completed out of 6</p>
                </div>
              </div>
            </div>
            <div className="d-flex door-left-work1">
              <div className="door-left-work1-icon">
                <h1>icon</h1>
              </div>
              <div className="door-left-work1-">
                <div>
                  <h4>Time Spent</h4>
                </div>
                <div className="d-flex">
                  <h2>5</h2>
                  <p>hours till now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          passwordError && ""
            ? "door-middle"
            : "door-middle rotate-style display-none"
        }
      >
        <div className="door-middle-h2">
          <h2 className="text-center">fingerprint Icon</h2>
        </div>

        <form onSubmit={submitHandler} className="door-middle-form">
          {successMessage && (
            <div className="success-msg">{successMessage}</div>
          )}
          <label className="text-center" htmlFor="password">
            ENTER YOUR PILEARNING PASSWORD
          </label>
          <input
            onChange={passwordHandler}
            value={password}
            className="password-input"
            type="password"
            required
          />
          {passwordError && <div className="error-msg">{passwordError}</div>}
          <div className="actions">
            {!passwordError && (
              <Link
                to="main"
                onClick={rotateHandler}
                className="btn btn-primary"
              >
                Enter Lab
              </Link>
            )}
          </div>
        </form>
      </div>
      <div className="door-right">
        <Timer />
      </div>
    </div>
  );
};

export default Home;
