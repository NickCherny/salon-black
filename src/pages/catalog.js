import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const CatalogPage = () => (
  <Layout>
    <SEO title="Catalog" keywords={['gatsby', 'application', 'react']} />
    <h1>Catalog</h1>
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  path
                  date
                }
              }
            }
          }
        }
      `}
      render={data => <div>{JSON.stringify(data)}</div>}
    />
  </Layout>
);

export default CatalogPage;
