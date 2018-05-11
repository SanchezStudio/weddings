import React, { Component } from 'react';

export default class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div className="splash__logo"></div>
        <video poster="https://weddings.nyc3.digitaloceanspaces.com/images/video/reel.jpg" className="splash__video" playsInline muted loop autoPlay>
          <source src="https://weddings.nyc3.digitaloceanspaces.com/images/video/reel.mp4" />
          <source src="https://weddings.nyc3.digitaloceanspaces.com/images/video/reel.webm" />
        </video>
        <a href="#welcome" className="splash__caret">

        </a>
      </div>
    );
  }
}
