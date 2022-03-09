import React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import OrbitCompilation from "../../images/tmpvideo.mp4";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import { GatsbyImage } from "gatsby-plugin-image";

interface LandingHeroProps {
  topText: string;
  mobileImage: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export const LandingHero = ({ topText, mobileImage }: LandingHeroProps) => {
  const { width } = useWindowSize();

  return (
    <div className="relative">
      {width > 640 ? (
        <video autoPlay loop className="w-screen opacity-80">
          <source src={OrbitCompilation} type="video/mp4" />
        </video>
      ) : (
        <GatsbyImage
          image={mobileImage.asset.gatsbyImageData}
          alt="Engineers Working"
        />
      )}
      <h1
        className="absolute top-4 left-4 text-3xl p-2 bg-gray-900 bg-opacity-50 
      font-black uppercase max-w-64 md:top-16 md:left-1/4 md:-ml-32 md:max-w-md md:text-6xl"
      >
        {topText}
      </h1>
    </div>
  );
};
