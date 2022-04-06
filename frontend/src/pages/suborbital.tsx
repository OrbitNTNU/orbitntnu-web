import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";
import { FadeInSection } from "../components/FadeInSection";
import { MissionText } from "../views/selfiesat/MissionText";
import { Specs } from "../views/selfiesat/Specs";

const SubOrbital = ({ data }) => {
  const { sanitySuborbitalPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_suborbital_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title={sanitySuborbitalPage.fadedTitle}
        name={sanitySuborbitalPage.title}
        text={sanitySuborbitalPage.topText}
        image={sanitySuborbitalPage.topImage}
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

export const query = graphql`
  query SuborbitalPageQuery {
    sanitySuborbitalPage {
      topText
      topImage {
        asset {
          gatsbyImageData
        }
      }
      title
      fadedTitle
    }
  }
`;

export default SubOrbital;
