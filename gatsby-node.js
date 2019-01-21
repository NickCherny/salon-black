/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({
  graphql, actions: { createPage }
}) => {
  const TargetComponent = require('./src/templates/catalog.js');
  const { data, error } = await graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath:
            frontmatter {
              path
            }
          }
        }
      }
    }
  `;

  if (error) {
    console.error(error);
  } else {
    data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        path: edge.node.fileAbsolutePath,
        component: TargetComponent,
        context: {
          ...edge,
        }
      });
    });
  }
};
