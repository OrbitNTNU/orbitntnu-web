import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface SpecsProps {
  name: string;
  specs: {
    name: string;
    text: string;
  }[];
  image: IGatsbyImageData;
}

export const Specs = ({ name, specs, image }: SpecsProps) => (
  <div className="mx-8 md:max-w-4xl md:m-auto">
    <h3 className="text-gray-300 text-center md:text-left">{name}</h3>
    <h2 className="text-3xl font-bold text-center md:text-left">
      SPECIFICATIONS
    </h2>
    <div className="flex flex-col justify-center md:flex-row-reverse">
      <GatsbyImage
        image={image}
        alt="Open Selfiesat"
        className="max-w-[270px] m-auto"
      />

      <ul className="w-[270px] md:w-[300px] m-auto md:mr-28">
        {specs.map((stat) => (
          <li
            className="max-w-[270px] md:max-w-none mx-4 md:mx-0 h-8 mt-2 border-b border-yellow-500"
            key={stat.name}
          >
            <span className="float-left font-bold">{stat.name}</span>
            <span className="float-right font-thin">{stat.text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
