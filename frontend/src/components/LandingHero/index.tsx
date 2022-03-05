import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import OrbitCompilation from "../../images/tmpvideo.mp4";
import { useWindowSize } from "../../utils/hooks/useWindowSize";

export const LandingHero = () => {
  const { width } = useWindowSize();

  return (
    <div className="relative">
      {width > 640 ? (
        <video autoPlay loop className="w-screen">
          <source src={OrbitCompilation} type="video/mp4" />
        </video>
      ) : (
        <StaticImage
          src="../../images/mobile-hero.png"
          alt="Engineers working on SelfieSat"
        />
      )}
      <h1 className="absolute top-4 left-4 text-3xl font-bold max-w-64">
        HOP ON OUR JOURNEY TO OUTER SPACE!
      </h1>
    </div>
  );
};
