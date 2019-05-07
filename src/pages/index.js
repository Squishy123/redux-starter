import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout/layout'
import SEO from "../components/seo"
 
const IndexPage = ({isDarkMode, dispatch}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default IndexPage
