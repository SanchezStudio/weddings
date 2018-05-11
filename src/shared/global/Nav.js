import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

const navigation = [
  {
    title: "Stories",
    link: "/#home"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Investment",
    link: "/investment"
  },
  {
    title: "Contact",
    link: "/contact"
  },
]

export default class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isNavOpen: false
    }

    this.navToggle = this.navToggle.bind(this)
  }
  navToggle(e) {
    if (e.currentTarget.className === "nav__toggle") {
      e.preventDefault();
    }
    this.setState({ isNavOpen: !this.state.isNavOpen })
  }
  render() {
    let headerClass = classNames({
      'nav-header': true,
      'is-menu-open': this.state.isNavOpen
    })
    return (
      <header className={headerClass}>
        <h1 className="nav-title">
          <a href="" className="nav-logo"></a>
        </h1>
        <nav className="nav">
          <a href="#" onClick={(e) => {this.navToggle(e)}} className="nav__toggle">
            <span className="nav__toggle__burger"></span>
          </a>
          <ul className="nav__menu">
            {navigation.map((item, index) => (
              <li key={`${item.title}-${index}`} className="nav__item">
                <NavLink className="nav__link" onClick={(e) => {this.navToggle(e)}} to={item.link}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}
