import * as React from 'react';
import { graphql } from 'gatsby';
import Button from '../components/Button';

const IndexPage = ({ data, errors }) => (
  <main>
    <title>Home Page</title>

    <Button label='Knapp' />

    {data.categories.edges.map((category, _id) => (
      <p key={_id}>{category.node.title}</p>
    ))}
  </main>
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
