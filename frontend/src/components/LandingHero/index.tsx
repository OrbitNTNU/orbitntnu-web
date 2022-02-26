import React from "react";
import OrbitCompilation from "../../images/tmpvideo.mp4";

export const LandingHero = () => (
  <div className="flex justify-center">
    <video autoPlay loop className="w-screen">
      <source src={OrbitCompilation} type="video/mp4" />
    </video>
    <h1 className="absolute top-44 left-32 text-white text-6xl font-bold max-w-lg">
      HOP ON OUR JOURNEY TO OUTER SPACE!
    </h1>
  </div>
);
