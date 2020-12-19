import React from 'react'
import { BroserRouter as Router, Link } from 'react-router-dom'

export default function DeputyCard({ deputy }) {
  const deputyImageUrl = (registered_id) => {
    console.log(registered_id)
    if (registered_id === undefined) return ''
    return `http://www.camara.leg.br/internet/deputado/bandep/${registered_id}.jpg`
  }

  return(
    <div className="card well">
      <div className="deputy-photo">
        <img src={deputyImageUrl(deputy.registered_id)} alt={deputy.full_name}/>
      </div>
      <div className="deputy-full-name">{deputy.full_name}</div>
      <div className="deputy-cpf">{deputy.cpf}</div>
      <div className="deputy-political-party">{deputy.political_party}</div>
      <div className="deputy-link">
        <Link to={`/deputies/${deputy.id}`}>Detalhes do Deputado</Link>
      </div>
    </div>
  )
}