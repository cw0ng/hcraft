import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import TagsList from "./tagsList"

const PostPreview = ({ post }) => {
  return (
    <article
      className="preview"
      css={css`
        margin: 3.25em auto 4em;
        display: flex;
        align-items: center;
        max-width: 1000px;
        .gatsby-image-wrapper {
          margin-right: 1em;
          &:hover {
            h1 {
              color: #466ee7 !important;
            }
          }
        }
        & > div {
          flex: 1;
        }
        p {
          margin-top: 1em;
        }
        @media (max-width: 1111px) {
          display: block;
          .gatsby-image-wrapper {
            margin: 0;
          }
          h1 {
            margin: 1em 0 0.25em !important;
          }
        }
      `}
    >
      <div>
        <Link to={`/posts/${post.slug}`}>
          <Img fluid={post.image} alt={post.imageAlt} />
        </Link>
      </div>
      <div>
        <Link to={`/posts/${post.slug}`}>
          <h1 className="title-link">{post.title}</h1>
          <p style={{ marginBottom: "0.25rem", color: "#333" }}>
            {post.excerpt}
          </p>
        </Link>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            justify-content: space-between;
          `}
        >
          {Boolean(post.tags.length) && <TagsList tags={post.tags} />}
          {/* <Link to={`/posts/${post.slug}`} className="small-link">
            Read this post
          </Link> */}
        </div>
      </div>
    </article>
  )
}

export default PostPreview
