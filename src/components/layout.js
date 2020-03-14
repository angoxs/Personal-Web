/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with love by
        {` `}
        <a href="https://www.gatsbyjs.org">Angel VU</a>
      </footer> */}
      <Footer>
        Made with Love by Angel VU
        <a href="mailto:angelCL0@outlook.com"> Email me</a> to ask anything
        @2020
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
