import React from "react";
import { Layout } from "../templates/Layout";
import { SelfieSatHeader } from "./selfiesat/SelfieSatHeader";

const SelfieSat = () => (
  <Layout>
    <SelfieSatHeader
      title="Orbit NTNU"
      name="SELFIESAT-1"
      text="The worlds first selfie taking satellitte."
    />
  </Layout>
);

export default SelfieSat;
