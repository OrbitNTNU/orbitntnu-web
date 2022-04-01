import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ButtonLink } from "../ButtonLink";

interface JoinCardProps {
  title: string;
  text: string;
  applyLink: string;
}

export const JoinCard = ({ title, text, applyLink }: JoinCardProps) => (
  <div className="bg-gray-900 p-4 m-4 md:max-w-md">
    <StaticImage
      src="../../images/obc-working.png"
      alt="Engineers working hard"
    />
    <h2 className="mt-2 text-2xl">{title}</h2>
    <p className="mb-4">{text}</p>
    <ButtonLink label="Apply" url={applyLink} />
  </div>
);
