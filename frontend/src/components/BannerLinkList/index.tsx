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
  <ul className="flex flex-col justify-center items-center">
    {links.map((link) => (
      <li key={link.title} className="px-4 py-2 md:max-w-4xl">
        <BannerLink link={link} />
      </li>
    ))}
  </ul>
);
