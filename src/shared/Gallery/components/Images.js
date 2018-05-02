import React, { Component } from 'react';

export default class Images extends Component {
  render() {
    return (
      <div>
      {this.props.images.map((item, index) => (
        <div key={`${item.title}-${index}`} className={`gallery__item gallery__item--${item.orientation} animate`}>
          <div className="gallery__inner">
            <img data-img-src={item.url} alt={item.title} className="gallery__image"/>
          </div>
        </div>
      ))}
      </div>
    );
  }
}
