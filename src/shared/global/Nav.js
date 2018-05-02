import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <header className="nav-header">
        <h1 className="nav-title">
          <a href="" className="nav-logo"></a>
        </h1>
        <nav className="nav">
          <a href="#" className="nav__toggle">
            <span className="nav__toggle__burger"></span>
          </a>
          <ul className="nav__menu">
            <li className="nav__item">
              <NavLink activeStyle={{}} to="/#home">Stories</NavLink>
            </li>
            <li className="nav__item">
              <NavLink activeStyle={{}} to="/about">About</NavLink>
            </li>
            <li className="nav__item">
              <NavLink activeStyle={{}} to="/investment">Investment</NavLink>
            </li>
            <li className="nav__item">
              <NavLink activeStyle={{}} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
