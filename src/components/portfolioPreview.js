import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PortfolioPreview = ({ data }) => {
  return (
    <section className="preview" css={css``}>
      <Link to={`/portfolio/${data.slug}`}>
        <h1 style={{ marginBottom: "0" }}>{data.title}</h1>
        <Img fluid={data.image} alt={data.imageAlt} />
      </Link>
    </section>
  )
}

export default PortfolioPreview
