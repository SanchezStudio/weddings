import React, { Component } from 'react';

export default class Video extends Component {
  render() {
    return (
      <div className="gallery__video animate">
        <div className="gallery__video-inner" dangerouslySetInnerHTML={{ __html: `<iframe src="https://player.vimeo.com/video/${this.props.url}?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`}}></div>
      </div>
    );
  }
}
