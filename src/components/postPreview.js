import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Container = styled.article`
  margin: 3.25em auto 4em !important;
  a:first-of-type {
    text-decoration: none;
    &:hover .title-link {
      color: ${p => p.theme.blue};
    }
  }
  p {
    margin-bottom: 0.25rem !important;
  }
`

const PostPreview = ({ post }) => {
  return (
    <Container className="content">
      <Link to={`/posts/${post.slug}`}>
        <h1 className="title-link">{post.title}</h1>
        <Img fluid={post.image} alt={post.imageAlt} />
      </Link>

      <p>{post.excerpt}</p>
      <Link to={`/posts/${post.slug}`} className="small-link">
        Read this post
      </Link>
    </Container>
  )
}

export default PostPreview
