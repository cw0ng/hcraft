import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"
import PageTitle from "./pageTitle"
import TagsList from "./tagsList"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
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
      <article className="content">
        <PageTitle title={post.frontmatter.title} />
        <p
          className="small-text"
          style={{ textAlign: "center", margin: "0 0 2rem" }}
        >
          Posted by Chris on {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.code.body}</MDXRenderer>
        <TagsList tags={post.frontmatter.tags} />
      </article>
    </Layout>
  )
}

export default PostTemplate
