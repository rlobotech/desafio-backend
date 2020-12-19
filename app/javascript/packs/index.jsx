import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/app'
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
