import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

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
  <div className="relative cursor-pointer">
    <GatsbyImage
      image={link.image.asset.gatsbyImageData}
      alt="banner"
      className="w-full h-32"
    />
    <p className="absolute bottom-2 left-4 font-bold">{link.title}</p>
  </div>
);
