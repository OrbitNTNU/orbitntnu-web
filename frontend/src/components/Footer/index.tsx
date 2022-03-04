import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-gray-900 p-4 text-center mt-8">
        <StaticImage
          src="../../images/orbitimage.png"
          alt="Orbit"
          className="w-16 mb-4"
          placeholder="none"
        />

        <div className="mb-4 text-sm">
          <p>Orbit NTNU</p>
          <p>O.S Bragstad plass 2B</p>
          <p>4 etg. Rom B406</p>
          <p>7034 Trondheim</p>
        </div>
      </div>

      <p className="bg-gray-800 p-4">Orbit NTNU © {year}</p>
    </footer>
  );
};
