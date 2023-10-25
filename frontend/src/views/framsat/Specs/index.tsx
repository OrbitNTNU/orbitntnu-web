import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import transparent1u3uCropped from "../../../images/Transparent1u3uCropped.png";

interface SpecsProps {
  name: string;
  specs: {
    name: string;
    text: string;
  }[];
  image: IGatsbyImageData | String;
}

export const Specs = ({ name, specs, image }: SpecsProps) => (
  <div className="mt-8 md:max-w-3xl md:m-auto">
    <h3 className="text-gray-300 text-center md:text-left">{name}</h3>
    <h2 className="text-3xl font-bold text-center md:text-left">
      SPECIFICATIONS
    </h2>
    <div className="flex flex-col justify-center md:flex-row-reverse">
      {typeof image === "string" ?
      <img
        src={transparent1u3uCropped}
        alt="Framsat"
        className="max-w-[270px] m-auto"
      />
      :
      <GatsbyImage
        image={image}
        alt="Open Framsat"
        className="max-w-[270px] m-auto"
      />
      }
      <ul className="w-[290px] md:w-[300px] m-auto md:mr-28">
        {specs.map((stat) => (
          <li
            className="max-w-[290px] md:max-w-none mx-4 md:mx-0 h-8 mt-2 border-b border-yellow-500"
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
