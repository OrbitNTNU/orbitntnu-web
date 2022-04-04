import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Layout } from "../templates/Layout";
import firebase from "gatsby-plugin-firebase";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  const { sanityBlogPage } = data;

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.analytics().logEvent("visited_blog_page");
  }, [firebase]);

  return (
    <Layout>
      <Header
        title={sanityBlogPage.fadedTitle}
        name={sanityBlogPage.title}
        text={sanityBlogPage.topText}
        image={sanityBlogPage.topImage}
      />
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    sanityBlogPage {
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

export default Blog;
