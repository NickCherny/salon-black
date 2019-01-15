import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout'
import {SEO} from '../components/SEO'

const CatalogPage = ({ data }) => (
  <Layout>
    <SEO title="Catalog" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Catalog</h1>
    <div>
      {JSON.stringify(data)}
    </div>
  </Layout>
);

export default CatalogPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { title: { ne: "" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
