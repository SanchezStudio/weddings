import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import { fetchGalleries } from './api'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/gallery/:id',
    component: Gallery,
    fetchInitialData: (path = '') => fetchGalleries(path.split('/').pop())
  }
]

export default routes
