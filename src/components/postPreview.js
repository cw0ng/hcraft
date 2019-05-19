import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostPreview = ({ post }) => {
  return (
    <article className="content preview" style={{ margin: " 3.25em auto 4em" }}>
      <Link to={`/posts/${post.slug}`}>
        <h1 className="title-link">{post.title}</h1>
        <Img fluid={post.image} alt={post.imageAlt} />
      </Link>

      <p style={{ marginBottom: "0.25rem" }}>{post.excerpt}</p>
      <Link to={`/posts/${post.slug}`} className="small-link">
        Read this post
      </Link>
    </article>
  )
}

export default PostPreview
