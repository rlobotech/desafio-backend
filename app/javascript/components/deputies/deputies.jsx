import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import DeputyRow from './deputy_row'
import '../../../assets/stylesheets/deputies/deputies.css'

export default function Deputies() {
  const [deputies, setDeputies] = useState([])

  useEffect(() => {
    axios.get('/api/v1/deputies')
    .then(resp => {
      setDeputies(resp.data)
    })
    .catch(resp => console.log(resp))
  }, [])

  const list = deputies.map(item => {
    return(
      <DeputyRow
        key={item.id}
        deputy={item}
      />
    )
  })

  return(
    <div className="container">
      <table id="example" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th className="th-deputy-photo">Foto</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Partido</th>
            <th>Total de Gastos</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  )
}
