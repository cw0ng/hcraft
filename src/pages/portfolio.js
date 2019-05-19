import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import usePortfolio from "../hooks/usePortfolio"
import PortfolioPreview from "../components/portfolioPreview"

export default () => {
  const content = usePortfolio()

  return (
    <Layout>
      <PageTitle title="Portfolio" />
      <div
        css={css`
          max-width: 2000px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          margin: 2em auto -1.75%;
          justify-content: space-between;
          section {
            width: 32%;
            margin-bottom: 2%;
            @media (max-width: 1500px) {
              width: 48%;
              margin-bottom: 2em;
            }
          }
        `}
      >
        {content.map(item => (
          <PortfolioPreview key={item.slug} data={item} />
        ))}
      </div>
    </Layout>
  )
}
