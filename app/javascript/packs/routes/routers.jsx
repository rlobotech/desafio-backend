import React, { useState, useEffect, Fragment } from 'react'
import Deputies from '../../components/deputies/deputies'
import Deputy from '../../components/deputies/deputy'

export default function Routers({ match }) {
  const toRender = {
    'home': () => <Deputies />,
    'deputies': () => <Deputies />,
    'deputies/:id': () => <Deputy match={match}/>
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
