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
  console.log(post)
  return (
    <Layout>
      <article>
        <PageTitle title={post.frontmatter.title} />
        <p
          className="small-text content"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Posted by Chris on {post.frontmatter.date}
        </p>
        <TagsList tags={post.frontmatter.tags} />
        <div className="content">
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}

export default PostTemplate
