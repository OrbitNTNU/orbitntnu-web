import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";

interface BannerLinkProps {
  link: {
    url: string;
    title: string;
    image: {
      asset: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

export const BannerLink = ({ link }: BannerLinkProps) => (
  <Link to={link.url} className="group">
    <div className={`relative flex flex-col w-[200px] h-[216px] justify-center items-center`}>
      <GatsbyImage
        image={link.image.asset.gatsbyImageData}
        alt="banner"
        className={`${link.title === "BIOSAT" ?
        "w-[200px] hover:w-[212px] mt-2"
        :
        "w-[184px] hover:w-[196px]"}`}
      />
    </div>
  </Link>
);
