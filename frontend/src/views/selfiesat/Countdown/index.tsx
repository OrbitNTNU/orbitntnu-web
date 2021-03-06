import React from "react";
import Countdown from "react-countdown";
import { CountdownRenderer } from "../../../components/CountdownRenderer";
import { CountUp } from "../../../components/CountUp";

interface SelfiesatCountdownProps {
  launchDate: Date;
}

export const SelfiesatCountdown = ({ launchDate }: SelfiesatCountdownProps) => {
  const isLaunchDateInThePast = launchDate.getTime() < Date.now();

  if (isLaunchDateInThePast) {
    return (
      <div className="z-10 mb-16 m-auto">
        <CountUp launchDate={launchDate} />
        <p className="ml-1 mt-2 md:font-normal text-gray-300 text-center">
          SINCE LAUNCH
        </p>
      </div>
    );
  } else {
    return (
      <div className="z-10 mb-16 m-auto">
        <Countdown date={launchDate} renderer={CountdownRenderer} />
        <p className="ml-1 mt-2 md:font-normal text-gray-300 text-center">
          UNTIL LAUNCH
        </p>
      </div>
    );
  }
};
