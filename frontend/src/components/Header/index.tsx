import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface HeaderProps {
  title: string;
  name?: string;
  text?: string;
  size?: "normal" | "long";
  image: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export const Header = ({
  title,
  name,
  text,
  image,
  size = "normal",
}: HeaderProps) => (
  <header className="relative -mb-8">
    <GatsbyImage
      image={image.asset.gatsbyImageData}
      alt="Join Page Header"
      className={`w-full ${
        size === "long" ? "h-[480px]" : "h-96"
      } relative opacity-50 md:h-[28rem]`}
    />
    <div className="flex flex-col absolute top-20 left-6 lg:top-1/4 lg:left-64">
      {name && text && (
        <React.Fragment>
          <h1 className="text-gray-300 font-thin text-2xl uppercase -mb-2">
            {title}
          </h1>
          <h2 className="font-bold text-4xl uppercase ">{name}</h2>
          <p
            className={`font-base ${
              size === "long" ? "max-w-sm" : "max-w-64"
            } ml-1`}
          >
            {text}
          </p>
        </React.Fragment>
      )}
    </div>
  </header>
);
