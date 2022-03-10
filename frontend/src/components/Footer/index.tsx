import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer data-scroll-section>
      <div className="bg-gray-900 p-8 mt-8 md:h-96">
        <div className="relative max-w-4xl m-auto">
          <StaticImage
            src="../../images/orbitimage.png"
            alt="Orbit"
            className="w-24 mb-4"
            placeholder="none"
          />

          <div className="mb-4 text-sm md:text-base">
            <p className="font-bold">Orbit NTNU</p>
            <p>O.S Bragstad plass 2B</p>
            <p>4 etg. Rom B406</p>
            <p>7034 Trondheim</p>
          </div>

          <div className="flex gap-16 md:absolute md:top-8 md:right-0">
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
      </div>

      <div className="bg-gray-800 p-8 ">
        <div className="max-w-4xl relative m-auto">
          <p>Orbit NTNU © {year}</p>
          <div className="flex absolute -top-1 right-4 gap-4">
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
      </div>
    </footer>
  );
};
