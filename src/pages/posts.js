import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import usePosts from "../hooks/usePosts"
import Layout from "../components/layout"

export default () => {
  const posts = usePosts()
  console.log("posts", posts)

  return (
    <Layout>
      Posts
      {posts.map(post => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  )
}
