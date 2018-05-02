import React, { Component } from 'react'
import Video from './components/Video'
import Images from './components/Images'
import Category from  './components/Category'
import './styles/_gallery.scss'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    console.log('props', this.props)
    let gallery
    if (__isBrowser__) {
      console.log("data", window.__INITIAL_DATA__)
      gallery = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      gallery = props.staticContext.data
    }

    this.state = {
      gallery,
      activeCategoryIndex: 0,
      activeCategory: gallery ? gallery.categories[0] : "",
      loading: gallery ? false : true
    }

    this.handleSetActiveCategoryIndex = this.handleSetActiveCategoryIndex.bind(this)
    this.renderMedia = this.renderMedia.bind(this)
    this.fetchGalleries = this.fetchGalleries.bind(this);
  }
  componentDidMount() {
    if (!this.state.gallery) {
      console.log('state', this.state)
      console.log('id', this.props.match.params.id)
      this.fetchGalleries(this.props.match.params.id)
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchGalleries(this.props.match.params.id)
    }
  }
  fetchGalleries(slug) {
    this.setState(() => ({ loading: true }))

    this.props.fetchInitialData(slug)
      .then((gallery) => this.setState(() => ({
        gallery,
        activeCategory: gallery.categories[0],
        loading: false
      })))

    console.log('fetchGalleries', this.state)
  }
  renderMedia(type) {
    if (type === 'video') {
      return (
        <Video url={this.state.gallery.video_url} />
      )
    } else if (type === 'wedding') {
      return (
        <Images images={this.state.gallery.wedding_images} />
      )
    }
  }
  renderCategories() {
    if (!this.state.gallery) {
      return null
    } else {
      return (
        <div>
          {this.state.gallery.categories.map((category, index) => {
            let className = this.state.activeCategoryIndex === index ? "categories__item categories__item--active" : "categories__item";
            return (
              <Category
                key={`category-${index}`}
                setActiveCategory={this.handleSetActiveCategoryIndex}
                className={className}
                index={index}
                item={category}
              />
            )
          })}
        </div>
      )
    }
  }
  handleSetActiveCategoryIndex(category, index) {
    // http://stackoverflow.com/questions/40792164/change-active-element-in-a-list-using-react
    this.setState({
      activeCategoryIndex: index,
      activeCategory: category
    });
  }
  render() {
    console.log('render', this.state)
    const { loading, gallery } = this.state

    if (loading === true) {
      return <h1>Loading</h1>
    }

    return (
      <div>
        <section className="header">
          <h1>{gallery.title}</h1>
          <p>{gallery.description}</p>
        </section>
        <section id="gallery" className="gallery">
          <div className="categories">
            {this.renderCategories()}
          </div>
          {this.renderMedia(this.state.activeCategory)}
        </section>
      </div>
    );
  }
}
