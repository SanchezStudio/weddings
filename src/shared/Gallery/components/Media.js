import React, { Component } from 'react'
import Video from './Video'
import Images from './Images'

export default class Media extends Component {
  render() {
    let { component } = this.props
    console.log(this.props)

    if (this.props.component === "video") {
      return (<Video url={this.props.video_url} />)
    } else {
      return (<Images images={this.props[`${component}_images`]} />)
    }
  }
}
