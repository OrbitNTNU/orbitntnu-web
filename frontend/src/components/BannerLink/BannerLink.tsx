import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const BannerLink = () => (
  <div className="relative cursor-pointer">
    <StaticImage
      src="../../images/mobile-hero.png"
      alt="banner"
      className="w-full h-32"
    />
    <p className="absolute bottom-2 left-4 font-bold">SELFIESAT</p>
  </div>
);
