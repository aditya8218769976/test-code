import React from "react";
import "../timer/Timer.css";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(10);

  useEffect(() => {
    var timer;
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(60);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="timer">
      <div className="container">
        <div className="timer-container">
          <h1>Timer</h1>
          <h1>
            {minutes}:{seconds}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
