import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import useTags from "../hooks/useTags"

const TagsBlock = () => {
  const tags = useTags()

  return (
    <ul
      css={css`
        width: 10%;
        text-align: right;
        list-style: none;
        border-right: 3px solid #333;
        margin-right: 1em;
        padding-right: 0.5em;
        h1 {
          font-size: 120%;
          line-height: 1;
        }
        li {
          margin: 0.5em 0;
          font-size: 80%;
          &:last-of-type {
            margin-bottom: -0.25em;
          }
        }
        span {
          margin-left: 0.25em;
        }
      `}
    >
      <h1>Tags</h1>
      {tags.map(tag => (
        <li key={tag.value}>
          <Link to={`/posts/tags/${tag.value}`}>{tag.value}</Link>
          <span className="small-text">({tag.total})</span>
        </li>
      ))}
    </ul>
  )
}

export default TagsBlock
