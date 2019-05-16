import React from "react"
import { css } from "@emotion/core"
import usePosts from "../hooks/usePosts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"

export default () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title="Posts" />
      <h1>Posts</h1>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
