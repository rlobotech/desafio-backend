import React, { useState, useEffect } from 'react'

export default function Deputies() {
  const [deputies, setDeputies] = useState([])

  useEffect(() => {
    axios.get('deputies')
    .then( resp => console.log(resp) )
    .catch( resp => console.log(resp) )
  }, [deputies.length])

  return(
    <div>Deputies Page</div>
  )
}