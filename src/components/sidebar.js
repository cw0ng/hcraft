import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

const Sidebar = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 170px;
  margin-bottom: 60px;
  text-align: center;
  border-left: ${p => p.theme.border};
  border-bottom: ${p => p.theme.border};
  border-bottom-left-radius: ${p => p.theme.borderRadius};
  div {
    padding: 1.25em 1em 0.75em;
    border-bottom: ${p => p.theme.border};
    font-size: 80%;
    p {
      margin: 0.5em 0;
    }
    p:nth-of-type(-n + 2) {
      font-weight: bold;
      letter-spacing: 0.25px;
    }
    p:nth-of-type(2) {
      padding-bottom: 1.25em;
      border-bottom: ${p => p.theme.greyLine};
      margin-bottom: 1.2em;
    }
  }
  a {
    text-decoration: none;
    color: ${p => p.theme.black};
    &:hover {
      border-bottom: ${p => p.theme.greyLine};
      color: ${p => p.theme.blue};
    }
  }
  header {
    padding: 1.4em 1em 1em;
    border-bottom: ${p => p.theme.border};
    div,
    a:hover {
      border: none;
    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    border-bottom: ${p => p.theme.border};
    padding: 0.25em;
    font-size: 160%;
    font-family: "BigNoodleTitling", sans-serif;
    &:last-of-type {
      border: none;
    }
  }
`

export default () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { regex: "/homecraft-logo/" }) {
        childImageSharp {
          fixed(width: 125) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Sidebar>
      <header>
        <Link to="/" title="Home">
          <Img fixed={logo.childImageSharp.fixed} />
        </Link>
      </header>
      <div>
        <p>Chris Skomorowski</p>
        <p>Residential Designer</p>
        <p>
          <a href="mailto:chris@hcraft.ca">chris@hcraft.ca</a>
        </p>
        <p>
          <a href="tel:1-778-581-8554">778-581-8554</a>
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Sidebar>
  )
}
