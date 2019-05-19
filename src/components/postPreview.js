import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

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
        }
        & > div {
          flex: 1;
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
        <h1 className="title-link">{post.title}</h1>
        <p style={{ marginBottom: "0.25rem" }}>{post.excerpt}</p>
        <Link to={`/posts/${post.slug}`} className="small-link">
          Read this post
        </Link>
      </div>
    </article>
  )
}

export default PostPreview
