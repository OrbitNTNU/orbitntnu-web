import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { FadeInSection } from "../../../components/FadeInSection";
import { Sponsor } from "../../../pages/sponsors";

interface SponsorSectionProps {
  sponsors: Sponsor[];
  type: string;
}

export const SponsorSection = ({ sponsors, type }: SponsorSectionProps) => (
  <section className="mt-16 flex flex-col justify-center md:max-w-2xl md:mx-auto">
    <h2 className="text-3xl font-bold mx-auto md:mx-0">{type}</h2>
    <span className="h-[2px] bg-gray-600 w-4/5 mx-auto mb-8 md:w-full" />
    <div className="flex flex-col justify-center md:flex-row md:flex-wrap md:max-w-2xl md:mx-auto md:gap-x-24 md:gap-y-8">
      {sponsors.map((sponsor) => (
        <figure
          key={sponsor.title}
          className="w-48 mx-auto mb-16 md:w-full md:max-w-64"
        >
          <FadeInSection key={sponsor.title} dissapear>
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
