import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/global/App'
import { BrowserRouter } from 'react-router-dom'
import './styles/screen.scss'

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
