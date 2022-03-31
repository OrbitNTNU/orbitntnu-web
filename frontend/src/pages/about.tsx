import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";
import { FadeInSection } from "../components/FadeInSection";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";

const AboutUs = () => {
  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_about_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title="Orbit NTNU"
        name="About Us"
        text="Orbit is run with both technical and non-technical support from our sponsors. 
      We are very grateful for the support we receive, and are always looking for new companies 
      to work with. Want to be a part of our journey? Send an email to cmo@orbitntnu.com!"
      />
      <section
        className="mt-24 px-8 relative md:flex md:flex-col md:max-w-4xl md:justify-center m-auto"
        data-scroll-section
      >
        <div className="md:flex md:gap-8 md:basis-0">
          <div>
            <h2 className="text-2xl md:text-4xl">
              Student Organization Building Satellites
            </h2>
            <p className="md:text-lg">
              Orbit is run with both technical and non-technical support from
              our sponsors. We are very grateful for the support we receive, and
              are always looking for new companies to work with. Want to be a
              part of our journey? Send an email to cmo@orbitntnu.com!
            </p>
          </div>
          <FadeInSection>
            <StaticImage
              src="../images/selfiesat.png"
              alt="SelfieSat"
              className="mb-8 md:mb-0"
            />
          </FadeInSection>
        </div>

        <FadeInSection>
          <StaticImage
            src="../images/obc-working.png"
            alt="Engineers Working"
            className="mb-8 md:my-16"
          />
        </FadeInSection>

        <div className="md:flex md:gap-8 md:mb-8 md:basis-0 md:my-8">
          <div>
            <h2 className="text-2xl md:text-4xl">
              Student Organization Building Satellites
            </h2>
            <p className="md:text-lg">
              Orbit is run with both technical and non-technical support from
              our sponsors. We are very grateful for the support we receive, and
              are always looking for new companies to work with. Want to be a
              part of our journey? Send an email to cmo@orbitntnu.com!
            </p>
          </div>
          <FadeInSection>
            <StaticImage
              src="../images/obc-working.png"
              alt="Engineers Working"
              className="my-8 md:my-0"
            />
          </FadeInSection>
        </div>

        <div className="md:flex md:flex-row-reverse md:gap-8 md:my-8">
          <div>
            <h2 className="text-2xl md:text-4xl">
              Student Organization Building Satellites
            </h2>
            <p className="md:text-lg">
              Orbit is run with both technical and non-technical support from
              our sponsors. We are very grateful for the support we receive, and
              are always looking for new companies to work with. Want to be a
              part of our journey? Send an email to cmo@orbitntnu.com!
            </p>
          </div>
          <FadeInSection>
            <StaticImage src="../images/framsat.png" alt="FramSat" />
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
