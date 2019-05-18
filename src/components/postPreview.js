import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        max-width: 900px;
        margin: 1em auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div
        css={css`
          flex: 1;
        `}
      >
        <Link to={`/posts/${post.slug}`}>
          <Img fluid={post.image} alt={post.imageAlt} />
        </Link>
      </div>

      <div
        css={css`
          flex: 1;
          margin: 1em;
        `}
      >
        <h1>
          <Link to={`/posts/${post.slug}`}> {post.title}</Link>
        </h1>
        <p>{post.excerpt}</p>
        <Link to={`/posts/${post.slug}`}>Read this post</Link>
      </div>
    </article>
  )
}

export default PostPreview
