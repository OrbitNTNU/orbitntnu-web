import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";

const Gallery = ({ data }) => {
  const { sanityGalleryPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_gallery_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title={sanityGalleryPage.fadedTitle}
        name={sanityGalleryPage.title}
        text={sanityGalleryPage.topText}
        image={sanityGalleryPage.topImage}
      />
    </Layout>
  );
};

export const query = graphql`
  query GalleryPageQuery {
    sanityGalleryPage {
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

export default Gallery;
