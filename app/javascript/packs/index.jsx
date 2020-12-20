import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/app'
import { BrowserRouter } from 'react-router-dom'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
