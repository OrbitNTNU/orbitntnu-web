import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ButtonLink } from "../ButtonLink";

interface JoinCardProps {
  title: string;
  text: string;
  applyLink: string;
}

export const JoinCard = ({ title, text, applyLink }: JoinCardProps) => (
  <div className="bg-gray-900 p-4 m-4 md:max-w-md relative md:pb-16">
    <StaticImage
      src="../../images/obc-working.png"
      alt="Engineers working hard"
    />
    <h2 className="mt-2 text-2xl">{title}</h2>
    <p className="mb-4">{text}</p>
    <div className="md:absolute md:bottom-4 md:left-4">
      <ButtonLink label="Apply" url={applyLink} />
    </div>
  </div>
);