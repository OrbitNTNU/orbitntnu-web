import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface HeaderProps {
  title: string;
  name: string;
  text: string;
}

export const Header = ({ title, name, text }: HeaderProps) => (
  <header className="relative -mb-8" data-scroll-section>
    <StaticImage
      src="../../images/obc-working.png"
      alt="Engineers Working"
      className="w-full h-96 relative opacity-50 lg:w-auto md:h-[28rem]"
    />
    <div className="flex flex-col absolute top-20 left-6 lg:top-1/4 lg:left-64">
      <h1 className="text-gray-300 font-thin text-2xl uppercase -mb-2">
        {title}
      </h1>
      <h2 className="font-bold text-4xl uppercase ">{name}</h2>
      <p className="font-base max-w-64 ml-1">{text}</p>
    </div>
  </header>
);
