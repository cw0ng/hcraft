import { Link, graphql, StaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Sidebar = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 170px;
  text-align: center;
  border-left: ${p => p.theme.border};
  border-bottom: ${p => p.theme.border};
  border-bottom-left-radius: ${p => p.theme.borderRadius};
  header {
    padding: 1em;
    border-bottom: ${p => p.theme.border};
  }
  & > div {
    padding: 1em;
    border-bottom: ${p => p.theme.border};
    font-size: 80%;
    line-height: 1;
    p:nth-child(-n + 2) {
      font-weight: bold;
    }
    p:nth-of-type(2) {
      padding-bottom: 1.25em;
      border-bottom: ${p => p.theme.greyLine};
      margin-bottom: 1.25em;
    }
  }
  a {
    text-decoration: none;
    color: ${p => p.theme.black};
    &:hover {
      border-bottom: ${p => p.theme.greyLine};
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
  return (
    // <StaticQuery
    //   query={graphql`
    //     query {
    //       logo: file(relativePath: { eq: "homecraft-logo.png" }) {
    //         childImageSharp {
    //           fluid(maxWidth: 300) {
    //             ...GatsbyImageSharpFluid
    //           }
    //         }
    //       }
    //     }
    //   `}
    //   render={data => (
    <Sidebar>
      <header>
        <a href="/">{/* <Img fluid={data.logo.childImageSharp.fluid} /> */}</a>
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
    //     )}
    //   />
  )
}
