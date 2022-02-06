import * as React from 'react';
import { graphql } from 'gatsby';
import { Button } from '../components/Button';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Layout } from '../templates/Layout';

const IndexPage = ({ data, errors }) => (
  <Layout>
    <Button label='Knapp' />

    {data.categories.edges.map((category, _id) => (
      <p key={_id}>{category.node.title}</p>
    ))}
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
