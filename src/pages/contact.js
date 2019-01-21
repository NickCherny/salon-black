import React from 'react';
import { get } from 'lodash';
import { StaticQuery, graphql } from 'gatsby';
import { ContactInfo } from '../components/ContactInfo';

const ContactPage = () => (
  <main>
    <StaticQuery
      query={graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { path: { eq: "/contact" } } }) {
          edges {
            node {
              html
            }
          }
        }
      }
    `}
      render={data => <ContactInfo {...get(data, 'allMarkdownRemark.edges[0].node', {})} />}
    />
  </main>
);

export default ContactPage;
