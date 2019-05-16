import React from "react"
import { css } from "@emotion/core"
import Layout from "./layout"
import SEO from "./seo"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
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
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <p>posted by {post.frontmatter.author}</p>
      <p>on {post.frontmatter.date}</p>
      <MDXRenderer>{post.code.body}</MDXRenderer>
    </Layout>
  )
}

export default PostTemplate
