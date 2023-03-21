import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { ButtonLink } from "../../../../components/ButtonLink";

interface JoinCardProps {
  title: string;
  text: string;
  applyLink: string;
  image: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  classname: string;
}

export const JoinCard = ({ title, text, applyLink, image, classname }: JoinCardProps) => (
  <div className={`bg-gray-900 p-4 m-4 relative md:pb-16 ${classname}`}>
    <GatsbyImage image={image.asset.gatsbyImageData} alt="Position" />
    <h2 className="mt-2 text-2xl">{title}</h2>
    <p className="mb-4">{text}</p>
    <div className="md:absolute md:bottom-4 md:left-4">
      <ButtonLink label="Apply" url={applyLink} />
    </div>
  </div>
);
