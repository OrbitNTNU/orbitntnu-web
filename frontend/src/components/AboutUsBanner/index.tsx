import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../Button";

export const AboutUsBanner = () => (
  <section className="relative flex justify-center">
    <StaticImage
      src="../../images/earth.jpg"
      alt="earth black backdrop"
      className="w-full"
    />
    <div className="absolute top-16 w-64 text-center">
      <h2 className="text-4xl font-bold">Orbit NTNU</h2>
      <p className="mb-2">
        We are designing and building small satellites that will be launched
        into space. We want to create the next generation of space engineers by
        working on complex space projects.
      </p>
      <Button label="LEARN MORE" />
    </div>
  </section>
);
