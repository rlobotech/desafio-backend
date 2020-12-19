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
    console.log(match)
    if (match.isExact && match.url === '/') {
      return toRender.home()
    }

    let routePath = match.params.resource
    if (match.params.id) routePath = `${routePath}/:id`
    // if (match.params.collection) routePath = `${routePath}/${match.params.collection}`

    // if (routePath.match(/login/)) {
    //   routePath = 'home'
    // } else if (!Object.keys(toRender).includes(routePath)) {
    //   routePath = 'not-found'
    // }
    return toRender[routePath]()
  }
  const [page] = useState(render())

  return (
    <Fragment>
      {page}
    </Fragment>
  )
}
