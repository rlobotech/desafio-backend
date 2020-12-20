import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next'
import Layout from '../layouts/layout'
import '../../../assets/stylesheets/importations/importations.css'

export default function ImportationsPage() {
  const [selectedFile, setSelectedFile] = useState(null)

  // useEffect(() => {
  //   axios.get('/api/v1/deputies')
  //   .then(resp => {
  //     setDeputies(resp.data)
  //   })
  //   .catch(resp => console.log(resp))
  // }, [])

  const onChangeHandler = event => {
    console.log(event.target.files[0])
    setSelectedFile(event.target.files[0])
  }

  const onClickHandler = () => {
    const data = new FormData()
    data.append('file', selectedFile)
    axios.post("api/v1/deputies/importations", data, {
      
    }).then(res => {
      console.log(res.statusText)
   })
  }

  return (
    <Layout>
      <form method="post" action="#" id="#">
        <div className="form-group files">
          <label>Faça o Upload do seu Arquivo CSV</label>
          <input type="file" name="file" onChange={onChangeHandler}/>
        </div>
        <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>
      </form>
    </Layout>
  )
}
