/*  https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("Failed to create posts:", result.errors)
  }
  const posts = result.data.allMdx.nodes
  posts.forEach(post => {
    actions.createPage({
      path: `posts/${post.frontmatter.slug}`,
      component: require.resolve("./src/components/postTemplate.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
