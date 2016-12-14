import React from 'react'
import { Router, Link } from "react-router"

import NavLink from "./NavLink"

export default React.createClass({
  render() {
    return (
      <div>
        <h1>react router tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/repos">Repos </NavLink></li>
          <li><NavLink to="/about">About </NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
