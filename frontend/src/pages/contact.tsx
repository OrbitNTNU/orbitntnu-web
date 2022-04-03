import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";

const Contact = ({ data }) => {
  const { sanityContactPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_contact_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title={sanityContactPage.fadedTitle}
        name={sanityContactPage.title}
        text={sanityContactPage.topText}
        image={sanityContactPage.topImage}
      />
    </Layout>
  );
};

export const query = graphql`
  query ContactPageQuery {
    sanityContactPage {
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

export default Contact;
