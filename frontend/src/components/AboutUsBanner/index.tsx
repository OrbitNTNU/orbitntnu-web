import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Button } from "../Button";

interface AboutUsBannerProps {
  title: string;
  aboutText: string;
  buttonText: string;
  image: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export const AboutUsBanner = ({
  title,
  aboutText,
  buttonText,
  image,
}: AboutUsBannerProps) => (
  <section className="relative flex justify-center">
    <GatsbyImage
      image={image.asset.gatsbyImageData}
      alt="earth black backdrop"
      className="w-full"
    />
    <div className="absolute top-16 w-64 text-center">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mb-2">{aboutText}</p>
      <Button label={buttonText} />
    </div>
  </section>
);
