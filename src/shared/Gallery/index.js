import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Media from './components/Media'
import Categories from  './components/Categories'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    let gallery
    if (__isBrowser__) {
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

    this.fetchGalleries = this.fetchGalleries.bind(this)
    this.handleSetActiveCategoryIndex = this.handleSetActiveCategoryIndex.bind(this)
  }
  componentDidMount() {
    if (!this.state.gallery) {
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
  }
  handleSetActiveCategoryIndex(category, index) {
    // http://stackoverflow.com/questions/40792164/change-active-element-in-a-list-using-react
    this.setState({
      activeCategoryIndex: index,
      activeCategory: category
    });
  }
  render() {
    const { loading, gallery } = this.state

    if (loading === true) {
      return <h1>Loading</h1>
    }

    return (
      <div>
        <Helmet>
          <title>{gallery.title}</title>
        </Helmet>
        <section className="header">
          <h1>{gallery.title}</h1>
          <p>{gallery.description}</p>
        </section>
        <section id="gallery" className="gallery">
          <Categories categories={this.state.gallery.categories} activeIndex={this.state.activeCategoryIndex} activeCategory={this.state.activeCategory} handleSetActiveCategoryIndex={this.handleSetActiveCategoryIndex} />
          <Media component={this.state.activeCategory} {...this.state.gallery} />
        </section>
      </div>
    );
  }
}
