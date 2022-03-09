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
    <div className="relative">
      <GatsbyImage
        image={link.image.asset.gatsbyImageData}
        alt="banner"
        className="w-full h-32 md:h-48 transition-all duration-500 group-hover:opacity-80"
      />
      <p className="absolute bottom-2 left-4 font-bold md:text-xl transition-all duration-500 group-hover:bottom-4">
        {link.title}
      </p>
    </div>
  </Link>
);
