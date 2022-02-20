import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../templates/Layout";
import { LandingHero } from "../components/LandingHero";

const IndexPage = ({ data, errors }) => (
  <Layout>
    <LandingHero />
    {/**
    {data.categories.edges.map((category, _id) => (
      <p key={_id}>{category.node.title}</p>
    ))}
     */}
  </Layout>
);

export const query = graphql`
  query TestQuery {
    categories: allSanityCategory {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`;

export default IndexPage;
