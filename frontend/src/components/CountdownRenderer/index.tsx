import React from "react";
import { CountdownBox } from "../CountdownBox";

export const CountdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    return null;
  } else {
    return (
      <div className="flex mt-4">
        <CountdownBox num={days} type="Days" />
        <CountdownBox num={hours} type="Hours" />
        <CountdownBox num={minutes} type="Minutes" />
        <CountdownBox num={seconds} type="Seconds" />
      </div>
    );
  }
};
