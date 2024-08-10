import React, { useState } from "react";
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

export const JoinCard = ({ title, text, applyLink, image, classname }: JoinCardProps) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className={`bg-gray-900 p-4 m-4 relative md:pb-16 ${classname}`}>
      <div className="w-full h-64 md:h-72 lg:h-80">
        <GatsbyImage 
          image={image.asset.gatsbyImageData} 
          alt="Position" 
          className="w-full h-full object-cover rounded-sm" 
        />
      </div>
      <h2 className="mt-4 text-2xl">{title}</h2>
      <p className={`mt-2 mb-4 ${showMore ? "" : "line-clamp-5"}`}>{text}</p>
      <button
        className="text-blue-500 underline mb-4"
        onClick={toggleShowMore}
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
      <div className="md:absolute md:bottom-4 md:left-4">
        <ButtonLink label="Apply" url={applyLink} />
      </div>
    </div>
  );
};

