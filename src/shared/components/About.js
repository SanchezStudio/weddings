import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="about">
          <div className="about__item about__item--image">
            <div className="about__image-inner"></div>
          </div>
          <div className="about__item about__item--blurb">
            <h2>Sanchez Studio</h2>
            <p>Hey! We're Meg &amp; Caleb, and we want to tell your story. We have been shooting weddings and portraits together in and around the midwest since 2011, with a short stint in Salt Lake City.</p>
            <p>Our goal as visual storytellers is to capture your day with stunning, emotional, and beautiful imagery. We want to provide you with stellar content that you will cherish forever, all while making sure you stay stress free.</p>
            <p>We know what goes into planning a wedding and we want to make sure that hiring a photographer/videographer is the easiest part. We want to give you quality memories of the day you spent months planning without feeling like you have to take out a loan to pay for them.</p>
            <p>So reach out. Email, telegram, raven, whatever.</p>
            <p>We're excited to chat.</p>
            <a className="btn" href="/contact">Contact Us</a>
          </div>
        </section>
      </div>
    );
  }
}
