import React from "react";
import { Layout } from "../templates/Layout";
import { MissionText } from "../views/selfiesat/MissionText";
import { SelfieSatHeader } from "../views/selfiesat/SelfieSatHeader";
import { Specs } from "../views/selfiesat/Specs";
import { FadeInSection } from "../components/FadeInSection";

const SelfieSat = () => (
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

export default SelfieSat;
