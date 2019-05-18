import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "posts" }
          extension: { eq: "mdx" }
        }
        sort: { fields: [relativePath], order: DESC }
      ) {
        nodes {
          sourceInstanceName
          relativePath
          childMdx {
            excerpt(pruneLength: 280)
            frontmatter {
              title
              slug
              image {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              imageAlt
            }
          }
        }
      }
    }
  `)

  return data.allFile.nodes.map(post => ({
    title: post.childMdx.frontmatter.title,
    slug: post.childMdx.frontmatter.slug,
    excerpt: post.childMdx.excerpt,
    image: post.childMdx.frontmatter.image.childImageSharp.fluid,
    imageAlt: post.childMdx.frontmatter.imageAlt,
  }))
}

export default usePosts
