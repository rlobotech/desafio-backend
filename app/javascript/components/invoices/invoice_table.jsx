import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next'

export default function InvoiceTable({ deputy }) {
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
      dataField: 'document_id',
      text: 'ID do Documento'
    },
    {
      dataField: 'document_url',
      text: 'Link do Documento'
    }
  ]

  return(
    <div className="container">
      <BootstrapTable
        keyField='id'
        data={deputy.invoices}
        columns={columns}
        noDataIndication="Não há Nota Fiscal Cadastrada"
        striped
        hover
        condensed
      />
    </div>
  )
}
