import { graphql, useStaticQuery } from "gatsby"
import { PreviewFrontmatter } from "./previewFrontmatter"

const usePortfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "portfolio" }
          extension: { eq: "mdx" }
        }
        sort: { fields: [relativePath], order: DESC }
      ) {
        nodes {
          childMdx {
            frontmatter {
              ...PreviewFrontmatter
            }
          }
        }
      }
    }
  `)

  return data.allFile.nodes.map(node => ({
    title: node.childMdx.frontmatter.title,
    slug: node.childMdx.frontmatter.slug,
    image: node.childMdx.frontmatter.image.childImageSharp.fluid,
    imageAlt: node.childMdx.frontmatter.imageAlt,
  }))
}

export default usePortfolio
