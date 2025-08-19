import firebase from "gatsby-plugin-firebase";
import React, { useEffect } from "react";
import { Layout } from "../templates/Layout";
import { FadeInSection } from "../components/FadeInSection";
import { OrbitTimeline } from "../components/RecruitmentTimeline";

const RecruitmentPage = () => {
  useEffect(() => {
    if (!firebase) {
      return;
    }
    firebase.analytics().logEvent("visited_recruitment_page");
  }, [firebase]);

  return (
    <Layout>
      <FadeInSection>
        <OrbitTimeline />
      </FadeInSection>
    </Layout>
  );
};

export default RecruitmentPage;