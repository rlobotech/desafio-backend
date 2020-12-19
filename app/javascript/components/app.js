import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Deputies from './deputies/deputies'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Deputies}/>
    </Switch>
  )
}