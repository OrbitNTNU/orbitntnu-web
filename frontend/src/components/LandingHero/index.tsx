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
        <video autoPlay loop className="w-screen">
          <source src={OrbitCompilation} type="video/mp4" />
        </video>
      ) : (
        <GatsbyImage
          image={mobileImage.asset.gatsbyImageData}
          alt="Engineers Working"
        />
      )}
      <h1 className="absolute top-4 left-4 text-3xl font-bold max-w-64">
        {topText}
      </h1>
    </div>
  );
};
