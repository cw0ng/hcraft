import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import PageTitle from "./pageTitle"
import PostPreview from "../components/postPreview"
import { PreviewFrontmatter } from "../hooks/previewFrontmatter"
import { css } from "@emotion/core"
import TagsBlock from "./tagsBlock"

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
  return (
    <Layout>
      <PageTitle title={`posts tagged — ${pageContext.tag}`} />

      <div
        css={css`
          display: flex;
          align-items: flex-start;
          justify-content: space-evenly;
          @media (max-width: 1400px) {
            flex-direction: column-reverse;
          }
        `}
      >
        <TagsBlock />
        <div
          css={css`
            margin-top: -1.75em;
          `}
        >
          {data.allMdx.nodes.map(post => {
            const postData = {
              excerpt: post.excerpt,
              title: post.frontmatter.title,
              slug: post.frontmatter.slug,
              image: post.frontmatter.image.childImageSharp.fluid,
              imageAlt: post.frontmatter.imageAlt,
              tags: post.frontmatter.tags,
            }

            return <PostPreview key={post.frontmatter.slug} post={postData} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default TagsTemplate
