import React, { Fragment } from 'react'

export default function Layout({ children }) {
  return (
    <Fragment>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">Gestão de Gastos dos Deputados</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </Fragment>
  )
}