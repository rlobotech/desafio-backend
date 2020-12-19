import React from 'react'
import { BroserRouter as Router, Link } from 'react-router-dom'

export default function DeputyRow({ deputy }) {
  const deputyImageUrl = (registered_id) => {
    if (registered_id === undefined) return ''
    return `http://www.camara.leg.br/internet/deputado/bandep/${registered_id}.jpg`
  }

  return(
    <tr>
      <td className="td-deputy-photo">
        <img
          className="img-deputy-photo"
          src={deputyImageUrl(deputy.registered_id)}
          alt={deputy.full_name}
        />
      </td>
      <td className="td-deputy-text">{deputy.full_name}</td>
      <td className="td-deputy-text">{deputy.cpf}</td>
      <td className="td-deputy-text">{deputy.political_party}</td>
      <td className="td-deputy-text">0</td>
    </tr>
  )
}
