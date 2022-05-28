import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Button } from "../Button";
import { FadeInSection } from "../FadeInSection";
import OrbitCompilationMp4 from "../../images/tmpvideo.mp4";
import OrbitCompilationOgv from "../../images/tmpvideo.ogv";
import PlaceholderImage from "../../images/black-image.png";

interface AboutUsBannerProps {
  title: string;
  aboutText: string;
  buttonText: string;
  image: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  executeScroll: () => any;
}

export const AboutUsBanner = ({
  title,
  aboutText,
  buttonText,
  image,
  executeScroll,
}: AboutUsBannerProps) => (
  <section className="relative flex justify-center mb-16">
    <FadeInSection>
      <div className="w-full h-full min-h-screen">
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
      </div>
    </FadeInSection>
    <div className="absolute top-1/2 -mt-32 max-w-64 text-center md:max-w-xl">
      <h2 className="text-4xl font-bold md:text-6xl mb-2">{title}</h2>
      <p className="mb-4 md:text-xl">{aboutText}</p>
      <Button label={buttonText} onClick={executeScroll} />
    </div>
  </section>
);
