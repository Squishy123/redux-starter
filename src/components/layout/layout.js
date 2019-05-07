import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { connect } from 'react-redux';

import Navbar from '../navbar/navbar';
import styles from "./layout.module.scss"

//example redux thingey
const changeBG = ({color, setBGColor}) => (
  <div>
    <p>{color}</p>
    <button onClick={() => {setBGColor('blue')}}>Blue</button>
    <button onClick={() => {setBGColor('red')}}>Red</button>

  </div>
)

changeBG.propTypes = {
  color: PropTypes.string.isRequired,
  setBGColor: PropTypes.func.isRequired
}

const mapStateToProps = ({color}) => {
  return {color};
}

const mapDispatchToProps = dispatch => {
  return {
    setBGColor: (color) => dispatch({type: `SET_BG_COLOR`, color})
  }
}

const ConnectedBG = connect(
  mapStateToProps,
  mapDispatchToProps
)(changeBG);

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
     <div className={styles.pageContainer}>
        <Navbar/>
        <ConnectedBG/>
        <main>{children}</main>
     </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout