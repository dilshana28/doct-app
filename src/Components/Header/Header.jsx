import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> <Navbar className="bg-dark ">
    <Container>
      <Navbar.Brand href="/">
    <div className='text-light'>
    <i class="fa-solid fa-house-chimney-medical"></i>
     Medwin Cares
    </div>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header