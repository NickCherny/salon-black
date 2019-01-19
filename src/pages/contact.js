import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ContactInfo } from '../components/ContactInfo';

const request = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: "/contact" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;

const ContactPage = () => (
  <main>
    <StaticQuery
      query={request}
      render={data => <ContactInfo {...data.allMarkdownRemark.edges[0].node} />}
    />
  </main>
);

export default ContactPage;
