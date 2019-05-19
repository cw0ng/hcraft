import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import usePosts from "../hooks/usePosts"
import PostPreview from "../components/postPreview"
import styled from "@emotion/styled"

const Section = styled.section`
  margin: 4em;
  & > h1 {
    border-left: ${p => p.theme.border};
    padding: 0 0.75rem;
    line-height: 1.25;
    margin: 0.5em 0;
    font-size: 175%;
  }
  .preview {
    h1 {
      border: none;
      color: ${p => p.theme.blue};
    }
    a:first-of-type:hover h1 {
      color: ${p => p.theme.black};
    }
  }
`

const IndexPage = () => {
  const post = usePosts()[0]
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Section>
        <h1>Featured Work</h1>
        <Link to="/portfolio">See all</Link>
      </Section>
      <Section>
        <h1>Latest Post</h1>

        <PostPreview key={post.slug} post={post} />
      </Section>
    </Layout>
  )
}
export default IndexPage
