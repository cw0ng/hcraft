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
      {content.map(item => (
        <PortfolioPreview key={item.slug} data={item} />
      ))}
    </Layout>
  )
}
