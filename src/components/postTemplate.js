import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"
import PageTitle from "./pageTitle"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
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
      <article>
        <PageTitle title={post.frontmatter.title} />
        <p
          className="small-link content"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Posted by Chris on {post.frontmatter.date}
        </p>
        <div className="content">
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}

export default PostTemplate
