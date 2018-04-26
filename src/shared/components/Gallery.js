import React, { Component } from 'react';

export default class Gallery extends Component {
  constructor(props) {
    super(props)

    let repos
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      repos = props.staticContext.data
    }

    this.state = {
      repos,
    }
  }
  render() {
    const { repos } = this.state

    return (
      <div>
        <section className="header">
          <h1>Gallery</h1>
        </section>
      </div>
    );
  }
}
