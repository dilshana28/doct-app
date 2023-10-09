import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DoctCard from '../Doctcard/DoctCard'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col';



function Alldoct() {
const[alldoctor,setallDoctor]=useState([])
const fetchData=async()=>{
    const response=await axios.get('http://localhost:3001/doctors')
    console.log(response.data);
    setallDoctor(response.data)
}
useEffect(()=>{
    fetchData()
},[])

  return (
    <div>
       <Row>
        {
          alldoctor.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            <DoctCard doctors={item}    /> 
          </Col>
           ))
        }
       </Row>
          
    
      
    </div>
  )
}

export default Alldoct