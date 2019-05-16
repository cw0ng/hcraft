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
        author
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <PageTitle title={post.frontmatter.title} />
      <p>
        posted by {post.frontmatter.author} on {post.frontmatter.date}
      </p>
      <MDXRenderer>{post.code.body}</MDXRenderer>
    </Layout>
  )
}

export default PostTemplate
