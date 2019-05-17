/*  https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allFile {
        nodes {
          sourceInstanceName
          childMdx {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("Failed to create posts:", result.errors)
  }

  const filterByCategory = (category, nodes) =>
    nodes.reduce((acc, curr) => {
      if (curr.sourceInstanceName === category) acc.push(curr.childMdx)
      return acc
    }, [])

  const posts = filterByCategory("posts", result.data.allFile.nodes)

  posts.forEach(post => {
    actions.createPage({
      path: `posts/${post.frontmatter.slug}`,
      component: require.resolve("./src/components/postTemplate.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })

  const portfolio = filterByCategory("portfolio", result.data.allFile.nodes)

  portfolio.forEach(node => {
    actions.createPage({
      path: `portfolio/${node.frontmatter.slug}`,
      component: require.resolve("./src/components/portfolioTemplate.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
