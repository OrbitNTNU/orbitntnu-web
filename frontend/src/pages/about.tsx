import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FadeInSection } from "../components/FadeInSection";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";

const AboutUs = () => (
  <Layout>
    <Header
      title="Orbit NTNU"
      name="About Us"
      text="Orbit is run with both technical and non-technical support from our sponsors. 
      We are very grateful for the support we receive, and are always looking for new companies 
      to work with. Want to be a part of our journey? Send an email to cmo@orbitntnu.com!"
    />
    <section className="mt-24 px-8 relative" data-scroll-section>
      <h2 className="text-2xl">Student Organization Building Satellites</h2>
      <p>
        Orbit is run with both technical and non-technical support from our
        sponsors. We are very grateful for the support we receive, and are
        always looking for new companies to work with. Want to be a part of our
        journey? Send an email to cmo@orbitntnu.com!
      </p>
      <FadeInSection>
        <StaticImage
          src="../images/selfiesat.png"
          alt="SelfieSat"
          className="mb-8"
        />
      </FadeInSection>
      <FadeInSection>
        <StaticImage
          src="../images/obc-working.png"
          alt="Engineers Working"
          className="mb-8"
        />
      </FadeInSection>
      <h2 className="text-2xl">Student Organization Building Satellites</h2>
      <p>
        Orbit is run with both technical and non-technical support from our
        sponsors. We are very grateful for the support we receive, and are
        always looking for new companies to work with. Want to be a part of our
        journey? Send an email to cmo@orbitntnu.com!
      </p>
      <FadeInSection>
        <StaticImage
          src="../images/obc-working.png"
          alt="Engineers Working"
          className="my-8"
        />
      </FadeInSection>
      <h2 className="text-2xl">Student Organization Building Satellites</h2>
      <p>
        Orbit is run with both technical and non-technical support from our
        sponsors. We are very grateful for the support we receive, and are
        always looking for new companies to work with. Want to be a part of our
        journey? Send an email to cmo@orbitntnu.com!
      </p>
      <FadeInSection>
        <StaticImage src="../images/framsat.png" alt="FramSat" />
      </FadeInSection>
    </section>
  </Layout>
);

export default AboutUs;
