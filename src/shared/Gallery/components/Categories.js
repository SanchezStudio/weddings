import React, { Component } from 'react'
import Category from './Category'

export default class Categories extends Component {
  render() {
    return (
      <div className="categories">
        {this.props.categories.map((category, index) => {
          let className = this.props.activeCategoryIndex === index ? "categories__item categories__item--active" : "categories__item";
          return (
            <Category
              key={`category-${index}`}
              setActiveCategory={this.props.handleSetActiveCategoryIndex}
              className={className}
              index={index}
              item={category}
            />
          )
        })}
      </div>
    );
  }
}
