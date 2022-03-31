import React, { useEffect } from "react";
import { Layout } from "../templates/Layout";
import { FramSatHeader } from "../views/framsat/FramSatHeader";
import firebase from "gatsby-plugin-firebase";

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
    </Layout>
  );
};

export default FramSat;
