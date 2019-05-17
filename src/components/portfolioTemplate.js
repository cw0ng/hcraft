import React from "react"
import { css } from "@emotion/core"
import Layout from "./layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"
import PageTitle from "./pageTitle"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`

const PortfolioTemplate = ({ data: { mdx: data } }) => {
  return (
    <Layout>
      <PageTitle title={data.frontmatter.title} />

      <MDXRenderer>{data.code.body}</MDXRenderer>
    </Layout>
  )
}

export default PortfolioTemplate
