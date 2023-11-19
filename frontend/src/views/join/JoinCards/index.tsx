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
    <span className=" col-span-1" />
    <section className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        {positions.filter((position) => 
          position.title.includes("Chief"))
        .map((position) => (
          <JoinCard
            key={position.title}
            title={position.title}
            text={position.text}
            applyLink={position.positionLink}
            image={position.image}
            classname="md:max-w-2xl"
          />
        ))}
      </div>
    </section>

    <div className="md:flex md:flex-wrap justify-center">
      {positions.filter((position) => 
        position.title.includes("Team Lead") || 
        position.title.includes("Manager"))
      .map((position) => (
        <JoinCard
          key={position.title}
          title={position.title}
          text={position.text}
          applyLink={position.positionLink}
          image={position.image}
          classname="md:max-w-md"
        />
      ))}
    </div>

    <div className="md:flex md:flex-wrap justify-center">
      {positions.filter((position) => 
        !position.title.includes("Chief") && 
        !position.title.includes("Manager") && 
        !position.title.includes("Team Lead"))
      .map((position) => (
        <JoinCard
          key={position.title}
          title={position.title}
          text={position.text}
          applyLink={position.positionLink}
          image={position.image}
          classname="md:max-w-md"
        />
      ))}
    </div>
  </React.Fragment>
);
