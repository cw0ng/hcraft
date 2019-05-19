import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import PageTitle from "./pageTitle"
import PostPreview from "../components/postPreview"
import { PreviewFrontmatter } from "../hooks/previewFrontmatter"

export const query = graphql`
  query($tag: [String]!) {
    allMdx(filter: { frontmatter: { tags: { in: $tag } } }) {
      nodes {
        excerpt
        frontmatter {
          ...PreviewFrontmatter
        }
      }
    }
  }
`

const TagsTemplate = ({ pageContext, data }) => {
  console.log(data)

  return (
    <Layout>
      <PageTitle title={`posts tagged — ${pageContext.tag}`} />
      {data.allMdx.nodes.map(post => {
        console.log("post", post)
        const postData = {
          excerpt: post.excerpt,
          title: post.frontmatter.title,
          slug: post.frontmatter.slug,
          excerpt: post.excerpt,
          image: post.frontmatter.image.childImageSharp.fluid,
          imageAlt: post.frontmatter.imageAlt,
          tags: post.frontmatter.tags,
        }

        return <PostPreview key={post.frontmatter.slug} post={postData} />
      })}
    </Layout>
  )
}

export default TagsTemplate
