import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        background: #eee;
        margin: 1em;
        padding: 1em;
      `}
    >
      <h1>
        <Link to={`/posts/${post.slug}`}> {post.title}</Link>
      </h1>
      <p>{post.excerpt}</p>
      <Link to={`/posts/${post.slug}`}>Read this post</Link>
    </article>
  )
}

export default PostPreview
