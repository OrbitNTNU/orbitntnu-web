import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const stats = [
  { name: "WEIGHT:", data: "1.6kg" },
  { name: "SIZE:", data: "0.1x0.1x0.1m" },
  { name: "ORBIT:", data: "500 - 550km" },
];

export const Specs = () => (
  <div className="mt-8 mx-8 md:max-w-2xl md:m-auto">
    <h3 className="text-gray-300 text-center md:text-left md:mt-16">
      FRAMSAT-1
    </h3>
    <h2 className="text-3xl font-bold text-center md:text-left md:-mb-8">
      SPECIFICATIONS
    </h2>
    <div className="flex flex-col justify-center md:flex-row-reverse">
      <StaticImage
        src="../../../images/selfiesatopen.png"
        alt="Open SelfieSat"
        className="max-w-64 m-auto"
      />
      <ul className="w-64 md:w-[300px] m-auto md:mr-28">
        {stats.map((stat) => (
          <li
            className="max-w-64 md:max-w-none mx-4 md:mx-0 h-8 mt-2 border-b"
            key={stat.name}
          >
            <span className="float-left font-bold">{stat.name}</span>
            <span className="float-right font-thin">{stat.data}</span>
          </li>
        ))}
      </ul>
    </div>
    <p className="mt-8">
      FRAMSat is a 1U satelite, mesuring 10x10x10 cm. We have developed,
      soldered and tested our subsystems that are using our own inhouse
      developed operating system and programs. This gives us total control of
      our system, and lets us tailour the hardware and software to our specific
      needs.
    </p>
  </div>
);
