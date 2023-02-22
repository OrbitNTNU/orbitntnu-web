import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";
import { MissionText } from "../views/suborbital/MissionText";
import { BlogLink } from "../components/BlogLink";

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
      <MissionText />

      {/* <div className="flex gap-8 flex-wrap bg-white p-16">
        <BlogLink linkUrl="/selfiesat" />
      </div> */}
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
