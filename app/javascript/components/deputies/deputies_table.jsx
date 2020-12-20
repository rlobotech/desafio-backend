import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next'
import '../../../assets/stylesheets/deputies/deputies.css'

export default function DeputiesTable({ deputies }) {
  const deputyImageUrl = (registered_id) => {
    if (registered_id === undefined) return ''
    return `http://www.camara.leg.br/internet/deputado/bandep/${registered_id}.jpg`
  }

  const columns = [
    {
      dataField: '',
      text: 'Foto',
      formatter: (cell, row, rowIndex, extraData) => (
        <img
          className="img-deputy-photo"
          src={deputyImageUrl(row.registered_id)}
          alt={row.full_name}
        />
      )
    },
    {
      dataField: 'full_name',
      text: 'Nome'
    },
    {
      dataField: 'cpf',
      text: 'CPF'
    },
    {
      dataField: 'political_party',
      text: 'Partido'
    }
  ]

  const expandRow = () => ({
    renderer: row => (
      <div>
        {console.log(row)}
        <p></p>
        <p>You can render anything here, also you can add additional data on every row object</p>
        <p>expandRow.renderer callback will pass the origin row object to you</p>
      </div>
    ),
    showExpandColumn: true
  })

  return (
    <div className="container">
      <BootstrapTable
        keyField='id'
        data={deputies}
        columns={columns}
        striped
        hover
        condensed
        noDataIndication="Não Deputados Cadastrados"
        expandRow={expandRow()}
      />
    </div>
  )
}


