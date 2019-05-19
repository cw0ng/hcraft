import React from "react"
import usePosts from "../hooks/usePosts"
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"
import PageTitle from "../components/pageTitle"
import { css } from "@emotion/core"
import TagsBlock from "../components/tagsBlock"

export default () => {
  const posts = usePosts()
  return (
    <Layout>
      <PageTitle title="Posts" />
      <div
        css={css`
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
        `}
      >
        <TagsBlock />
        <div>
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
