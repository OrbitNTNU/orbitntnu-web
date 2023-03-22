import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface SelfieSatHeader {
  title: string;
  name: string;
  text: string;
}

export const SelfieSatHeader = ({ title, name, text }: SelfieSatHeader) => (
  <header className="relative -mb-8">
    <div className="flex justify-center relative h-[24rem] bg-black md:h-[28rem]">
      <StaticImage
        src="../../../images/16_selfie.png"
        alt="Stars"
        className={`max-w-4xl h-full absolute opacity-90`} />
    </div>
    <div className="flex flex-col absolute top-20 left-6 lg:top-1/4 lg:left-64">
      <h1 className="text-gray-300 font-thin text-2xl uppercase -mb-2 z-10">
        {title}
      </h1>
      <h2 className="font-bold text-4xl uppercase z-10">{name}</h2>
      <p className="max-w-64 ml-1 z-10">{text}</p>
    </div>
  </header>
);
