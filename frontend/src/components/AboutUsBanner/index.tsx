import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Button } from "../Button";
import { Link } from "gatsby";

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
      className="w-full md:max-w-3xl"
    />
    <div className="absolute top-1/2 -mt-32 max-w-64 text-center md:max-w-xl">
      <h2 className="text-4xl font-bold md:text-6xl">{title}</h2>
      <p className="mb-2 md:text-xl">{aboutText}</p>
      <Link to="/about">
        <Button label={buttonText} />
      </Link>
    </div>
  </section>
);
