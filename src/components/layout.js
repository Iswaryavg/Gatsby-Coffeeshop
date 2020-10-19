/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);




export default Layout
