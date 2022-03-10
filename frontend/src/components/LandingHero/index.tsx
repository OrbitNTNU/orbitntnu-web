import React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import OrbitCompilationMp4 from "../../images/tmpvideo.mp4";
import OrbitCompilationOgv from "../../images/tmpvideo.ogv";
import PlaceholderImage from "../../images/mobile-hero.png";
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
    <div className="relative" data-scroll-section>
      {width > 640 ? (
        <video
          autoPlay
          loop
          muted
          className="w-screen opacity-70"
          poster={PlaceholderImage}
        >
          <source src={OrbitCompilationMp4} type="video/mp4" />
          <source src={OrbitCompilationOgv} type="video/ogg" />
        </video>
      ) : (
        <GatsbyImage
          image={mobileImage.asset.gatsbyImageData}
          alt="Engineers Working"
          className="opacity-70"
        />
      )}
    </div>
  );
};
