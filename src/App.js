import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [time, setTime] = useState(new Date(Date.now()));

  useEffect(() => {
    setInterval(function () {
      setTime(new Date());
    }, 1000);
  }, []);

  var secondsDegree = ((time.getSeconds() + 45) % 60) * 6;
  var minutesDegree = ((time.getMinutes() + 45) % 60) * 6;
  var hoursDegree = ((time.getHours() + 9) % 12) * 30;

  return (
    <>
      <div className="clock">
        <div
          className="handle seconds"
          style={{ transform: 'rotate(' + secondsDegree + 'deg)' }}
        />
        <div
          className="handle minutes"
          style={{ transform: 'rotate(' + minutesDegree + 'deg)' }}
        />
        <div
          className="handle hours"
          style={{ transform: 'rotate(' + hoursDegree + 'deg)' }}
        />
      </div>
      <p>{time.toLocaleTimeString()}</p>
    </>
  );
}
