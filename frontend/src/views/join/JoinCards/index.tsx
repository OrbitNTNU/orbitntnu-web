import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { JoinCard } from "./JoinCard";

interface JoinCardsProps {
  sectionTitle: string;
  positions: {
    title: string;
    text: string;
    positionLink: string;
    image: {
      asset: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  }[];
}

export const JoinCards = ({ sectionTitle, positions }: JoinCardsProps) => (
  <React.Fragment>
    <h2 className="mt-16 text-2xl text-center md:text-3xl">{sectionTitle}</h2>
    <div className="md:flex md:flex-wrap justify-center">
      {positions.map((position) => (
        <JoinCard
          key={position.title}
          title={position.title}
          text={position.text}
          applyLink={position.positionLink}
          image={position.image}
        />
      ))}
    </div>
  </React.Fragment>
);
