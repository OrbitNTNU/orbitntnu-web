import React, { useEffect, useState } from "react";
import { CountdownBox } from "../CountdownBox";

interface CountUp {
  launchDate: Date;
}

export const CountUp = ({ launchDate }: CountUp) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function setTimeSinceLaunch() {
    let date_future = new Date();
    let date_now = launchDate;

    let seconds = Math.floor(
      (date_future.getTime() - date_now.getTime()) / 1000
    );
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }

  useEffect(() => {
    setTimeSinceLaunch();
    setInterval(setTimeSinceLaunch, 1000);
  }, []);

  return (
    <div className="flex mt-4">
      <CountdownBox num={days} type="Days" />
      <CountdownBox num={hours} type="Hours" />
      <CountdownBox num={minutes} type="Minutes" />
      <CountdownBox num={seconds} type="Seconds" />
    </div>
  );
};
