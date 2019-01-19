/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({
  graphql, actions: { createPage }
}) => {
  const TargetComponent = global.require('./src/templates/catalog.js');
  return graphql`
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
  `.then((result) => {
      if (result.error) {
        throw result.error;
      } else {
        console.log(result);
        result.data.allMarkdownRemark.edges.forEach((edge) => {
          createPage({
            path: edge.node.fileAbsolutePath,
            component: TargetComponent,
            context: {
              ...edge,
            }
          });
        });
      }
    })
    .catch(console.error);
};
