import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const PortfolioPreview = ({ data }) => {
  return (
    <article
      css={css`
        background: #eee;
        margin: 1em;
        padding: 1em;
      `}
    >
      <h1>
        <Link to={`/portfolio/${data.slug}`}> {data.title}</Link>
      </h1>
    </article>
  )
}

export default PortfolioPreview
