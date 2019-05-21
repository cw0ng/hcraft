import { graphql, useStaticQuery } from "gatsby"

const useTags = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return data.allMdx.group.map(tag => ({
    value: tag.fieldValue,
    total: tag.totalCount,
  }))
}

export default useTags
