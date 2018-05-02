import React, { Component } from "react";

export default class Category extends Component {
  render() {
    let { className, index, setActiveCategory, item } = this.props;
    return (
      <div className={className} onClick={(event) => { setActiveCategory(item, index); }}>
        <h4>{item}<span>•</span></h4>
      </div>
    )
  }
}
