import React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { BannerLink } from "../BannerLink";

interface BannerLinkListProps {
  links: {
    url: string;
    title: string;
    image: {
      asset: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  }[];
}

export const BannerLinkList = ({ links }: BannerLinkListProps) => (
  <div className="flex justify-center">
    <ul className="flex flex-row flex-wrap justify-center items-center md:max-w-4xl px-4">
      {links.map((link) => (
        <li key={link.title} className="md:max-w-4xl">
          <BannerLink link={link} />
        </li>
      ))}
    </ul>
  </div>
);
