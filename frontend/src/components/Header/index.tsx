import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface HeaderProps {
  title: string;
  name: string;
  text: string;
}

export const Header = ({ title, name, text }: HeaderProps) => (
  <header className="relative -mb-8">
    <StaticImage
      src="../../images/mobile-hero.png"
      alt="Engineers Working"
      className="w-full h-96 relative opacity-70 md:h-auto"
    />
    <div className="flex flex-col absolute top-20 left-6 lg:top-1/4 lg:left-64">
      <h1 className="text-gray-300 font-thin text-2xl uppercase -mb-2 lg:text-4xl">
        {title}
      </h1>
      <h2 className="font-bold text-4xl uppercase lg:text-7xl">{name}</h2>
      <p className="font-base max-w-64 lg:text-xl lg:max-w-xs">{text}</p>
    </div>
  </header>
);
