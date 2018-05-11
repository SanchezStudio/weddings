import React, { Component } from 'react';
import LazyLoad from 'react-lazyload'

export default class Images extends Component {
  constructor(props) {
    super(props)

    this.handleHeight = this.handleHeight.bind(this)
  }
  handleHeight(orientation) {
    if (orientation === 'portrait' || 'portrait--full') {
      return 2000
    } else {
      return 1333
    }
  }
  render() {
    return (
      <div>
      {this.props.images.map((item, index) => (
        <div key={`${item.title}-${index}`} className={`gallery__item gallery__item--${item.orientation}`}>
          <div className="gallery__inner">
            <LazyLoad once={true} height={this.handleHeight(item.orientation)}>
              <img src={item.url} alt={item.title} className="gallery__image"/>
            </LazyLoad>
          </div>
        </div>
      ))}
      </div>
    );
  }
}
