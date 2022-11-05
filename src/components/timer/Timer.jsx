import React from "react";
import "../timer/Timer.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(2);

  const navigate = useNavigate();

  useEffect(() => {
    var timer;
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 0) {
        setMinutes(minutes - 1);

        setSeconds(60);
      }
    }, 1000);
    if (minutes === 0 && seconds === 0) {
      navigate("/");
    }

    return () => clearInterval(timer);
  });

  window.localStorage.setItem("seconds", seconds);
  window.localStorage.setItem("minutes", minutes);
  //   var arr = window.localStorage.getItem("minutes");

  //   console.log(arr, "arr...");
  //   var arr1 = window.localStorage.getItem("seconds");

  //   console.log(arr1, "arr1,,,,,,,,");
  //   const minuteHandle = () => {
  //     const arr = window.localStorage.getItem("minutes");
  //     if (arr === minutes) {
  //       return minutes;
  //     }
  //   };
  //   const secondHanler = () => {
  //     const arr1 = window.localStorage.getItem("seconds");
  //     if (arr1 === seconds) {
  //       return seconds;
  //     }
  //   };

  const arr = window.localStorage.getItem("minutes");

  console.log(arr, "arr....");

  const arr1 = window.localStorage.getItem("seconds");
  console.log(arr1, "arr1....");
  return (
    <div className="timer">
      <div className="container">
        <div className="timer-container">
          <h1>Timer</h1>
          <h1>
            {arr}:{arr1}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
