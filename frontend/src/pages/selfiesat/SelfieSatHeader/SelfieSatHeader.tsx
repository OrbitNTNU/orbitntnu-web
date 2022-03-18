import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Countdown from "react-countdown";

interface SelfieSatHeader {
  title: string;
  name: string;
  text: string;
}

const CountdownBox = ({ num, type }: { num: number; type: string }) => (
  <div className="mr-4 bg-gray-800 bg-opacity-60 flex flex-col text-center w-16 h-16 md:w-24 md:h-24 justify-center">
    <span className="text-2xl mt-1 md:text-4xl">{num}</span>
    <span className="font-thin">{type}</span>
  </div>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
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

export const SelfieSatHeader = ({ title, name, text }: SelfieSatHeader) => {
  const launchDate = new Date(2022, 6, 1, 10);

  return (
    <header className="relative -mb-8" data-scroll-section>
      <StaticImage
        src="../../../images/stars.png"
        alt="Stars"
        className="w-full h-96 relative opacity-70 lg:w-auto md:h-[28rem]"
      />
      <div className="flex flex-col absolute top-20 left-6 lg:top-1/4 lg:left-64">
        <h1 className="text-gray-300 font-thin text-2xl uppercase -mb-2 z-10">
          {title}
        </h1>
        <h2 className="font-bold text-4xl uppercase z-10">{name}</h2>
        <p className="max-w-64 ml-1 z-10">{text}</p>
        <div className="z-10">
          <Countdown date={launchDate} renderer={renderer} />
          <p className="ml-1 mt-2 font-thin md:font-normal">Until launch</p>
        </div>
      </div>
      <StaticImage
        src="../../../images/selfiesat.png"
        alt="Selfiesast"
        className="absolute top-16 right-16 w-64 z-0 md:right-32 md:top-12 md:max-w-sm md:w-full"
      />
    </header>
  );
};
