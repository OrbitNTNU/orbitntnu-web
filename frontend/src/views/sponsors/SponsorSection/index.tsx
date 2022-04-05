import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { FadeInSection } from "../../../components/FadeInSection";
import { Sponsor } from "../../../pages/sponsors";

interface SponsorSectionProps {
  sponsors: Sponsor[];
  type: string;
}

export const SponsorSection = ({ sponsors, type }: SponsorSectionProps) => (
  <section className="mt-16 flex flex-col justify-center">
    <h2 className="text-3xl font-bold mx-auto">{type}</h2>
    <span className="h-[2px] bg-gray-300 w-4/5 mx-auto mb-8" />
    <div className="flex flex-col justify-center">
      {sponsors.map((sponsor) => (
        <figure key={sponsor.title} className="w-48 mx-auto mb-16">
          <FadeInSection key={sponsor.title}>
            <GatsbyImage
              image={sponsor.sponsor.asset.gatsbyImageData}
              alt={sponsor.sponsor.caption}
            />
          </FadeInSection>
        </figure>
      ))}
    </div>
  </section>
);
