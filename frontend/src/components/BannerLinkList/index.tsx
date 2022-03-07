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
  <ul>
    {links.map((link) => (
      <li key={link.title} className="px-4 py-2">
        <BannerLink link={link} />
      </li>
    ))}
  </ul>
);
