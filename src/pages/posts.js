import React from "react"
import { css } from "@emotion/core"
import usePosts from "../hooks/usePosts"
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"
import PageTitle from "../components/pageTitle"

export default () => {
  const posts = usePosts()

  return (
    <Layout>
      <PageTitle title="Posts" />
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
