import React from 'react'
import { BroserRouter as Router, Link } from 'react-router-dom'

export default function DeputyRow({ deputy }) {
  const deputyImageUrl = (registered_id) => {
    if (registered_id === undefined) return ''
    return `http://www.camara.leg.br/internet/deputado/bandep/${registered_id}.jpg`
  }

  return(
    <tr>
      <td><img src={deputyImageUrl(deputy.registered_id)} alt={deputy.full_name}/></td>
      <td>{deputy.full_name}</td>
      <td>{deputy.cpf}</td>
      <td>{deputy.political_party}</td>
      <td>0</td>
    </tr>
  )
}
