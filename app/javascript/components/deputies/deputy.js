import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import DeputyCard from './deputy_card'

export default function Deputy({ match }) {
  const [deputy, setDeputy] = useState({})

  useEffect(() => {
    axios.get(`/api/v1/deputies/${match.params.id}`)
    .then(resp => {
      setDeputy(resp.data)
    })
    .catch(resp => console.log(resp))
  }, [])

  return (
    <DeputyCard
      deputy={deputy}
    />
  )
}
