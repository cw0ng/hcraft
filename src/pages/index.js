import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import usePosts from "../hooks/usePosts"
import usePortfolio from "../hooks/usePortfolio"
import PostPreview from "../components/postPreview"
import PortfolioPreview from "../components/portfolioPreview"
import styled from "@emotion/styled"

const Section = styled.section`
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
  .featured {
    display: flex;
    margin: 0 auto 4em;
    max-width: 2000px;
    justify-content: space-between;
    .preview {
      flex: 1;
      margin: 0.45rem;
    }
  }
  &:last-of-type {
    .preview {
      margin: 1em auto 0 !important;
    }
  }
`

const IndexPage = () => {
  const post = usePosts()[0]
  const portfolio = usePortfolio().filter(node => node.frontPage)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Section>
        <h1>Featured Work</h1>
        <div className="featured">
          {portfolio.map(item => (
            <PortfolioPreview key={item.slug} data={item} />
          ))}
        </div>
      </Section>

      <Section>
        <h1>Latest Post</h1>
        <PostPreview key={post.slug} post={post} />
      </Section>
    </Layout>
  )
}
export default IndexPage
