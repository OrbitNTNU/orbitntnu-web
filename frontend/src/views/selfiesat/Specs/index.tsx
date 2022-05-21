import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const stats = [
  { name: "WEIGHT:", data: "1.8kg" },
  { name: "SIZE:", data: "10x10x20cm" },
  { name: "ORBIT:", data: "SSO 535km" },
  { name: "FREQUENCY:", data: "437.5MHz" },
  { name: "BAND:", data: "UHF" },
  { name: "CAMERAS:", data: "4" },
  { name: "POWER:", data: "1.2W" },
];

export const Specs = () => (
  <div className="mx-8 md:max-w-4xl md:m-auto">
    <h3 className="text-gray-300 text-center md:text-left">SELFIESAT-1</h3>
    <h2 className="text-3xl font-bold text-center md:text-left md:-mb-4">
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
  </div>
);
