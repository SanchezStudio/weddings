import Home from '../Home'
import About from '../About'
import Investment from '../Investment'
import Gallery from '../Gallery'
import { fetchGalleries } from './api'

const routes =  [
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
    path: '/investment',
    exact: true,
    component: Investment,
  },
  {
    path: '/gallery/:id',
    component: Gallery,
    fetchInitialData: (path = '') => fetchGalleries(path.split('/').pop())
  }
]

export default routes
