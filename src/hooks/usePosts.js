import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "posts" } }
        sort: { fields: [relativePath], order: DESC }
      ) {
        nodes {
          sourceInstanceName
          relativePath
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

  return data.allFile.nodes.map(post => ({
    title: post.childMdx.frontmatter.title,
    author: post.childMdx.frontmatter.author,
    slug: post.childMdx.frontmatter.slug,
    excerpt: post.childMdx.excerpt,
  }))
}

export default usePosts
