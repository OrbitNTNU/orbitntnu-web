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
    <div className="relative flex flex-col w-52 items-center justify-center">
      {/* <p className="mb-2">
        {link.title}
      </p> */}
      <GatsbyImage
        image={link.image.asset.gatsbyImageData}
        alt="banner"
        className={`flex ml-2 h-max transition-all duration-500  ${link.title === "BIOSAT" ? "w-[225px] mt-2 hover:w-[257px]" : "w-52 hover:w-[15rem]"}`}
      />

    </div>
  </Link>
);
