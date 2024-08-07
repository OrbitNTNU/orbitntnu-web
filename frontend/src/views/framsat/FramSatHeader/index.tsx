import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface FramSatHeader {
  title: string;
  name: string;
  text: string;
}

export const FramSatHeader = ({ title, name, text }: FramSatHeader) => (
  <header className="relative -mb-8">
    <StaticImage
      src="../../../images/space.jpg"
      alt="Stars"
      className="w-full h-96 relative opacity-70 md:h-[28rem]"
    />
    <div className="flex flex-col absolute top-20 left-6 lg:top-1/4 lg:left-64">
      <h1 className="text-gray-300 font-thin text-2xl uppercase -mb-2 z-10">
        {title}
      </h1>
      <h2 className="font-bold text-4xl uppercase z-10">{name}</h2>
      <p className="max-w-64 ml-1 z-10">{text}</p>
    </div>
  </header>
);

