import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import Helmet from "react-helmet"

export default class Investment extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Investment</title>
        </Helmet>
        <section className="investments" id="investments">
          <h1>Pricing</h1>
          <p>If you're looking for a ride or die photo/video team you've come to right dang place.</p>
          <p>Days, weeks, and months after the vows are made, the cake is cut, and you've danced your ass off to the greatest hits; you will be able to remember all of the most beautiful memories from your wedding day. Not because you asked your uncle Bill to set up his camera/camcorder in the back, but because you invested in two people that had your future friends and family in mind throughout one of the biggest days of your life.</p>
          <p>We're not just giving you digital files created by 1's and 0's, we're adding you to the squad. We'll be your open ear and your shoulder to lean on from day one. There to answer questions, keep the timeline, and get that stupid hair that always flies up to behave. Consider us the two extra guests you never knew you wanted and we'll make sure your investment doesn't go to waste.</p>
          <p className="price">Photo &amp; video packages start at $2500.</p>
          <p className="hesitate">
            Please <NavLink to="/contact">contact us</NavLink> for our detailed pricing info.
            <br />
            We're in the business of telling stories, and we would love to get the chance to tell yours.
          </p>
        </section>
      </div>
    );
  }
}
