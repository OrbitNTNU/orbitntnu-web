import React, { useEffect } from "react";
import { Layout } from "../templates/Layout";
import { FramSatHeader } from "../views/framsat/FramSatHeader";
import firebase from "gatsby-plugin-firebase";
import { FadeInSection } from "../components/FadeInSection";
import { MissionText } from "../views/framsat/MissionText";
import { Specs } from "../views/framsat/Specs";
import { StaticImage } from "gatsby-plugin-image";

const FramSat = () => {
  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_framsat_page");
  }, [firebase]);

  return (
    <Layout>
      <FramSatHeader
        title="Orbit NTNU"
        name="FRAMSAT-1"
        text="Bringing space closer to home"
      />
      <FadeInSection>
        <MissionText />
      </FadeInSection>
      <FadeInSection>
        <Specs />
      </FadeInSection>

      <FadeInSection>
        <div className="flex justify-center mt-4">
          <StaticImage
            src="../images/framsat-image.jpg"
            alt="FRAMSat"
            className="max-w-screen-lg mx-8"
          />
        </div>
      </FadeInSection>
    </Layout>
  );
};

export default FramSat;
