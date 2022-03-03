import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const LeftContent = () => (
  <div className="w-1/2">
    <StaticImage
      src="../../images/orbitimage.png"
      alt="Orbit"
      className="w-16 mb-8"
      placeholder="none"
    />
    <div className="mb-4">
      <p className="font-bold">Orbit NTNU</p>
      <p>O.S Bragstad plass 2B</p>
      <p>4 etg. Rom B406</p>
      <p>7034 Trondheim</p>
    </div>
  </div>
);
