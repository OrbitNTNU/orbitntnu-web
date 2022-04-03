import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";

const Sponsors = ({ data }) => {
  const { sanitySponsorsPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_sponsors_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title={sanitySponsorsPage.fadedTitle}
        name={sanitySponsorsPage.title}
        text={sanitySponsorsPage.topText}
        image={sanitySponsorsPage.topImage}
      />
    </Layout>
  );
};

export const query = graphql`
  query SponsorsPageQuery {
    sanitySponsorsPage {
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

export default Sponsors;
