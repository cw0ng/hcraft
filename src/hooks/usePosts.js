import { graphql, useStaticQuery } from "gatsby"
import { PreviewFrontmatter } from "./previewFrontmatter"

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
          childMdx {
            excerpt(pruneLength: 280)
            frontmatter {
              ...PreviewFrontmatter
              tags
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
    tags: post.childMdx.frontmatter.tags,
  }))
}

export default usePosts
