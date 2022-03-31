import React, { useEffect } from "react";
import { Layout } from "../templates/Layout";
import { MissionText } from "../views/selfiesat/MissionText";
import { SelfieSatHeader } from "../views/selfiesat/SelfieSatHeader";
import { Specs } from "../views/selfiesat/Specs";
import { FadeInSection } from "../components/FadeInSection";
import firebase from "gatsby-plugin-firebase";

const SelfieSat = () => {
  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_selfiesat_page");
  }, [firebase]);

  return (
    <Layout>
      <SelfieSatHeader
        title="Orbit NTNU"
        name="SELFIESAT-1"
        text="The worlds first selfie taking satellitte."
      />
      <FadeInSection>
        <MissionText />
      </FadeInSection>
      <FadeInSection>
        <Specs />
      </FadeInSection>
    </Layout>
  );
};

export default SelfieSat;
