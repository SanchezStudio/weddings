import React, { Component } from 'react';

const galleries = [
  {
    name: 'Kya & Mike',
    slug: 'kya-and-mike',
    categories: ['all', 'engagement', 'photo', 'video'],
    thumbnail: '/'
  }
]

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="home" className="header header--home">
          <h1>Stories</h1>
        </section>
      </div>
    );
  }
}
