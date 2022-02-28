import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../Button";

export const AboutUsBanner = () => (
  <section className="relative flex justify-center">
    <StaticImage src="../../images/earth.jpg" className="w-3/5" />

    <div className="absolute top-64 left-100 w-64">
      <h2 className="text-4xl text-white">Orbit NTNU</h2>
      <p className="text-white mb-2">
        We are designing and building small satellites that will be launched
        into space. We want to create the next generation of space engineers by
        working on complex space projects.
      </p>
      <Button label="LEARN MORE" />
    </div>
  </section>
);
