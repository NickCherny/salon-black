import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import {
  CatalogList
} from '../components/CatalogList';

const CatalogPage = () => (
  <Layout>
    <SEO title="Catalog" keywords={['gatsby', 'application', 'react']} />
    <h1>Catalog</h1>
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            filter: {
              frontmatter: {
                path: { regex: "/price/" }
              }
            }
          ) {
            edges {
              node {
                html
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark }) => <CatalogList data={{ ...allMarkdownRemark.edges }} />}
    />
  </Layout>
);

export default CatalogPage;
