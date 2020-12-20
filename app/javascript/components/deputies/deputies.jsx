import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next'
import DeputiesTable from './deputies_table'

export default function Deputies() {
  const [deputies, setDeputies] = useState([])

  useEffect(() => {
    axios.get('/api/v1/deputies')
    .then(resp => {
      setDeputies(resp.data)
    })
    .catch(resp => console.log(resp))
  }, [])

  return (
    <DeputiesTable deputies={deputies}/>
  )
}


