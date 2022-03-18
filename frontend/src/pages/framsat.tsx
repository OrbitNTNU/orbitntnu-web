import React from "react";
import { Layout } from "../templates/Layout";
import { FramSatHeader } from "./framsat/FramSatHeader";

const FramSat = () => (
  <Layout>
    <FramSatHeader
      title="Orbit NTNU"
      name="FRAMSAT-1"
      text="Bringing space closer to home"
    />
  </Layout>
);

export default FramSat;
