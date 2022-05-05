import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FadeInSection } from "../../../components/FadeInSection";

export const MissionText = () => (
  <section className="mt-24 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto">
    <div className="md:flex md:gap-8 md:basis-0">
      <div>
        <h2 className="text-2xl md:text-4xl">Mission</h2>
        <p className="md:text-base">
          Through active guidance, the members are taught to choose, design, and
          build their own payload system while using Orbit NTNU’s existing
          components in order to become familiar with its design and challanges,
          in a less complex environment. Their goal is to launch a mission
          within one year with sounding rockets or weather balloons, showcasing
          what students are able to achieve on their own straight after high
          school. The only required skill is enthusiasm!
        </p>
      </div>
      <FadeInSection>
        <StaticImage
          src="../../../images/suborbital2.jpg"
          alt="SubOrbital Balloon"
          className="mb-8 md:mb-0"
        />
      </FadeInSection>
    </div>

    <FadeInSection>
      <StaticImage
        src="../../../images/suborbital1.jpg"
        alt="Image 2"
        className="mb-8 md:my-16"
      />
    </FadeInSection>

    <div className="md:flex md:flex-row-reverse md:gap-8 md:my-8">
      <p className="md:text-base md:min-w-64">
        Orbit NTNU has built its own platform to learn about space, in the
        SubOrbital program. Each year, a set of first-year students are selected
        for our program through a comprehensive application process.
        <br />
        The program has had high sucsesses, providing curucal practical
        experieince in their education in adtion to providing a social network.
        After their mission, the students are integrated into the satellite
        development, where they experience a feeling of mastery early on, due to
        their familiarity with spacecraft design and operation.
      </p>
      <FadeInSection>
        <StaticImage src="../../../images/suborbital3.jpg" alt="Messy desk" />
      </FadeInSection>
    </div>
  </section>
);
