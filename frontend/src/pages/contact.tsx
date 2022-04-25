import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";
import { ContactSection } from "../views/contact/ContactSection";

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
        image={sanityContactPage.topImage}
      />
      <ContactSection
        contentSectionTitle={sanityContactPage.contentSectionTitle}
        contentSectionTitle2={sanityContactPage.contentSectionTitle2}
        contentSectionEmail={sanityContactPage.contentSectionEmail}
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
      contentSectionTitle2
      contentSectionTitle
      contentSectionEmail
    }
  }
`;

export default Contact;
