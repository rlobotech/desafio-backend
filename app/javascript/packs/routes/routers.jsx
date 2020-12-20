import React, { useState, useEffect, Fragment } from 'react'
import ImportationsPage from '../../components/importations/importations_page'
import DeputiesPage from '../../components/deputies/deputies_page'

export default function Routers({ match }) {
  const toRender = {
    'home': () => <ImportationsPage />,
    'deputies': () => <DeputiesPage />
  }

  const render = () => {
    if (match.isExact && match.url === '/') {
      return toRender.home()
    }

    let routePath = match.params.resource
    if (match.params.id) routePath = `${routePath}/:id`

    return toRender[routePath]()
  }
  const [page] = useState(render())

  return (
    <Fragment>
      {page}
    </Fragment>
  )
}
