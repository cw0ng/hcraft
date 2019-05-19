import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import { Link } from "gatsby"
import useTags from "../hooks/useTags"

export default () => {
  const tags = useTags()

  return (
    <Layout>
      <PageTitle title="Tags" />
      <ul
        css={css`
          max-width: 400px;
          margin: 0 auto;
          text-align: center;
          list-style: none;
          li {
            margin: 1em;
          }
          span {
            margin-left: 0.25em;
          }
        `}
      >
        {tags.map(tag => (
          <li key={tag.value}>
            <Link to={`/posts/tags/${tag.value}`}>{tag.value}</Link>
            <span className="small-text">({tag.total})</span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
