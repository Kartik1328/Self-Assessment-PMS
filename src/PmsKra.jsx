import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PmsKra() {
    const [value,setValue]=useState([])
    useEffect(()=>{
          axios.get("http://localhost:8080/employeeKra/getemployeeKra")
          .then((response)=>setValue(response.data))
          .catch(err=>console.log(err))
    },[])

    console.log(value)
  return (
    <div>
      {
        value.map((i,index)=>(
          <div key={index} className=''>
            <p>{i.kra}</p>
            <p></p>
          </div>
        ))
      }
    </div>
  )
}

export default PmsKra
