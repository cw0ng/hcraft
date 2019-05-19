import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Tags = ({ tags }) => {
  console.log("len", tags.length)
  return (
    <div
      className="small-text"
      css={css`
        display: flex;
        align-items: baseline;
      `}
    >
      <p
        css={css`
          margin-right: 0.2em;
          font-size: 80%;
        `}
      >
        TAGS:
      </p>
      <ul
        css={css`
          display: flex;
          list-style: none;
          padding: 0;
          li {
            margin: 0 0.15em;
            &::after {
              content: ", ";
            }
            &:last-of-type::after {
              content: "";
            }
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
          <li>
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
