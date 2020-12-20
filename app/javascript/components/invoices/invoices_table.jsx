import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next'
import '../../../assets/stylesheets/invoices/invoices.css'

export default function InvoicesTable({ invoices, invoicesGridMessage }) {
  const columns = [
    {
      dataField: 'description',
      text: 'Descrição'
    },
    {
      dataField: 'provider',
      text: 'Provedor'
    },
    {
      dataField: 'provider_cnpj',
      text: 'CNPJ do Provedor'
    },
    {
      dataField: 'issue_date',
      text: 'Data de Emissão'
    },
    {
      dataField: 'net_value',
      text: 'Valor Liquido'
    },
    {
      dataField: 'document_url',
      text: 'Link do Documento',
      formatter: (cell, row, rowIndex, extraData) => (
        <a
          href={row.document_url}
          target="_blank">
          Link
        </a>
      )
    }
  ]

  // extract later to a hook
  let max = -Infinity
  let key
  let i = invoices.forEach(function (v, k) {
    if (max < +v.net_value) {
      max = +v.net_value
      key = k
    }
  })

  const rowStyle = (row, rowIndex) => {
    if (rowIndex == key) return { backgroundColor: '#ed9898' }
  }

  return(
    <div className="invoice-table">
      <BootstrapTable
        keyField='id'
        data={invoices}
        columns={columns}
        noDataIndication={invoicesGridMessage}
        striped
        hover
        condensed
        rowStyle={ rowStyle }
      />
    </div>
  )
}
