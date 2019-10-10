import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PageTitle from "./pageTitle"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

const PortfolioTemplate = ({ data: { mdx: data } }) => {
  return (
    <Layout>
      <PageTitle title={data.frontmatter.title} />

      <MDXRenderer>{data.body}</MDXRenderer>
    </Layout>
  )
}

export default PortfolioTemplate
