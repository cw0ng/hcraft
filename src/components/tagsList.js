import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Tags = ({ tags }) => {
  return (
    <div
      className="small-text"
      css={css`
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
      `}
    >
      <p
        css={css`
          font-size: 80%;
          margin-right: 0.25em !important;
        `}
      >
        TAGS
      </p>
      <ul
        css={css`
          display: flex;
          list-style: none;
          padding: 0;
          li {
            margin: 0 0.35em;
          }
          a {
            color: #666 !important;
            &:hover {
              color: #466ee7 !important;
            }
          }
        `}
      >
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/posts/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.array,
}

export default Tags
