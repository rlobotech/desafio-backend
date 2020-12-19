import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import DeputyCard from './deputy_card'

export default function Deputies() {
  const [deputies, setDeputies] = useState([])

  useEffect(() => {
    axios.get('/api/v1/deputies')
    .then(resp => {
      setDeputies(resp.data)
    })
    .catch(resp => console.log(resp))
  }, [deputies.length])

  const list = deputies.map(item => {
    return(
      <DeputyCard
        key={item.id}
        deputy={item}
      />
    )
  })

  return(
    <div className="deputies container">
      <div className="header">
        <h1>Deputados</h1>
        <div className="sub-header">Lista dos Deputados</div>
      </div>
      <div className="grid">
        {list}
      </div>
    </div>
  )
}