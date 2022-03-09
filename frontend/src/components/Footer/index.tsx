import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-gray-900 p-8 mt-8">
        <StaticImage
          src="../../images/orbitimage.png"
          alt="Orbit"
          className="w-24 mb-4"
          placeholder="none"
        />

        <div className="mb-4 text-sm">
          <p className="font-bold">Orbit NTNU</p>
          <p>O.S Bragstad plass 2B</p>
          <p>4 etg. Rom B406</p>
          <p>7034 Trondheim</p>
        </div>

        <div className="flex gap-16">
          <ul>
            <li className="py-2">About US</li>
            <li className="py-2">Blog</li>
            <li className="py-2">Gallery</li>
            <li className="py-2">Sponsors</li>
            <li className="py-2">Contact</li>
            <li className="py-2">Team</li>
            <li className="py-2">Join</li>
          </ul>

          <ul>
            <li className="py-2">SELFISAT</li>
            <li className="py-2">FRAMSAT-1</li>
            <li className="py-2">SUBORBITAL</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 p-4 relative">
        <p>Orbit NTNU © {year}</p>
        <div className="flex absolute top-3 right-4 gap-4">
          <StaticImage
            src="../../images/github.png"
            alt="github"
            className="w-8"
          />
          <StaticImage
            src="../../images/instagram.png"
            alt="instagram"
            className="w-8"
          />
          <StaticImage
            src="../../images/facebook.png"
            alt="facebook"
            className="w-8"
          />
        </div>
      </div>
    </footer>
  );
};
