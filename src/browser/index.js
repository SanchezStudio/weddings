import React, { Component } from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/components/App'
import { BrowserRouter } from 'react-router-dom'
import './images/image.jpg'

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)
