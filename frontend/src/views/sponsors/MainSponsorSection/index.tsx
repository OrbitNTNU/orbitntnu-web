import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { FadeInSection } from "../../../components/FadeInSection";

interface MainSponsorSectionProps {
  mainSponsorDescription: string;
  mainSponsorImage: {
    caption: string;
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  mainSponsorLargeImage: {
    caption: string;
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export const MainSponsorSection = ({
  mainSponsorDescription,
  mainSponsorImage,
  mainSponsorLargeImage,
}: MainSponsorSectionProps) => (
  <section className="mt-16 flex flex-col justify-center">
    <h2 className="text-3xl font-bold m-auto">MAIN SPONSOR</h2>
    <GatsbyImage
      image={mainSponsorImage.asset.gatsbyImageData}
      alt={mainSponsorImage.caption}
      className="w-48 mt-2 mx-auto"
    />
    <FadeInSection>
      <figure className="bg-yellow-300 p-8 m-4">
        <GatsbyImage
          image={mainSponsorLargeImage.asset.gatsbyImageData}
          alt={mainSponsorLargeImage.caption}
        />
        <p className="text-black mt-4">{mainSponsorDescription}</p>
      </figure>
    </FadeInSection>
  </section>
);
