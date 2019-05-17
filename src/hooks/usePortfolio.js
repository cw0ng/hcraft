import { graphql, useStaticQuery } from "gatsby"

const usePortfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "portfolio" } }) {
        nodes {
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

  return data.allFile.nodes.map(node => ({
    title: node.childMdx.frontmatter.title,
    slug: node.childMdx.frontmatter.slug,
  }))
}

export default usePortfolio
