import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './DoctCard.css'
import { Link } from 'react-router-dom';


function DoctCard({doctors}) {
    console.log(doctors);
  return (
    <div> 
      <Link to={`/view/${doctors.id}`} style= {{textDecoration:"none"}}>
      <Card className='card mt-3' style={{ width: '18rem', borderRadius:'20px',}} >
    <Card.Header> <b> {doctors.name}</b></Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>{doctors.email}</ListGroup.Item>
      <ListGroup.Item>{doctors.phone}</ListGroup.Item>
      <ListGroup.Item>{doctors.hospital}</ListGroup.Item>
      <ListGroup.Item>{doctors.available_hours}</ListGroup.Item>
    </ListGroup>
  </Card>
      </Link>
       </div>
  )
}

export default DoctCard