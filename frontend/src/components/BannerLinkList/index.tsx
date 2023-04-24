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
  <ul className="flex flex-wrap justify-center items-center mt-10">
    {links.map((link) => (
      <li key={link.title} className=" flex justify-center items-center px-4 py-2 h-[18rem] md:max-w-xl">
        <BannerLink link={link} />
      </li>
    ))}
  </ul>
);
