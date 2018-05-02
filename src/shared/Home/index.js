import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import list from '../../browser/data/couples.json'

export default class Home extends Component {
  render() {
    let { couples } = list;
    return (
      <div>
        <section id="home" className="header header--home">
          <h1>Stories</h1>
        </section>
        <section className="home">
          {couples.map((couple, index) => (
            <NavLink key={`${couple.slug}-${index}`} className="home__item" to={`/gallery/${couple.slug}`}>
              <div className="home__img" style={{ "backgroundImage": `url(https://weddings.nyc3.digitaloceanspaces.com/data/galleries/${couple.slug}/images/thumbnail.jpg)` }}></div>
              <h4 className="home__title">{couple.title}</h4>
            </NavLink>
          ))}
        </section>
      </div>
    );
  }
}
