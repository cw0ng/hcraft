import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { ThemeProvider } from "emotion-theming"
import Sidebar from "./sidebar"
import "../styles/reset.css"
import "../styles/typography.css"

const theme = {
  border: "4px solid #333",
  borderRadius: "1.5em",
  greyLine: "1px solid #ccc",
  black: "#333",
}

const Page = styled.div`
  min-height: 96vh;
  border: ${p => p.theme.border};
  margin: 1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom-right-radius: ${p => p.theme.borderRadius};
  border-top-right-radius: ${p => p.theme.borderRadius};
  main {
    margin: 2em;
    flex-grow: 2;
    h1,
    p,
    ul {
      max-width: 36em;
      margin: 1em auto;
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Page>
          <main>{children}</main>
          <Sidebar />
        </Page>
        <footer
          css={css`
            margin: -1em 0 0 1.45em;
            font-size: 66%;
            text-transform: uppercase;
            a {
              text-decoration: none;
              color: #ccc;
              &:hover {
                color: #aaa;
              }
            }
          `}
        >
          <a href="http://www.corinawong.com" target="_blank">
            Site by
          </a>
        </footer>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
