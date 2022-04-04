import React, { useEffect } from "react";
import { Layout } from "../templates/Layout";
import { Header } from "../components/Header";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";

const NotFoundPage = ({ data }) => {
  const { sanityNotFoundPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_404_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title={sanityNotFoundPage.fadedTitle}
        name={sanityNotFoundPage.title}
        text={sanityNotFoundPage.topText}
        image={sanityNotFoundPage.topImage}
      />
    </Layout>
  );
};

export const query = graphql`
  query NotFoundPageQuery {
    sanityNotFoundPage {
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

export default NotFoundPage;
