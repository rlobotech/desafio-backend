import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next'
import DeputiesTable from './deputies_table'
import Layout from '../layouts/layout'

export default function DeputiesPage() {
  const [deputies, setDeputies] = useState([])

  useEffect(() => {
    axios.get('/api/v1/deputies')
    .then(resp => {
      setDeputies(resp.data)
    })
    .catch(resp => console.log(resp))
  }, [])

  return (
    <Layout>
      <DeputiesTable deputies={deputies}/>
    </Layout>
  )
}