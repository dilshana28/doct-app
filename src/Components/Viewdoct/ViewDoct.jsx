import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './ViewDoct.css'



function ViewDoct() {
//get parameter
// const pathParameter= useParams()
// console.log(pathParameter); //id:
// console.log(pathParameter.id); //2 

    const {id}=useParams()
    console.log(id);

//state creation
const [DoctDetails,setDoctDetails]=useState({})

//Api call for particular doctor details
     const fetchData=async()=>{
        const response=await axios.get(`http://localhost:3001/doctors/${id}`)
        console.log(response.data); //data in object format
        setDoctDetails(response.data)
       
     //or
     //const {data}=await axios.get(`http://localhost:3001/doctors/${id}`)
        //console.log(data); //data in object format
        //setDoctDetails(data)


     }
     console.log(DoctDetails);

     useEffect(()=>{
        fetchData()
     },[])

  return (
    <div>
        <Card className='card2'   style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="https://www.siasat.com/wp-content/uploads/2021/05/doctor.jpg" /> */}
      <Card.Body>
        <Card.Title><b>{DoctDetails.name}</b> </Card.Title>
        {/* <Card.Text>
        
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email:{DoctDetails.email}</ListGroup.Item>
        <ListGroup.Item>Hospital:{DoctDetails. hospital}</ListGroup.Item>
        <ListGroup.Item>Address:{DoctDetails.address}</ListGroup.Item>
        <ListGroup.Item>available_days:{DoctDetails.available_days}</ListGroup.Item>

      </ListGroup>
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card> 
    </div>
  )
}

export default ViewDoct