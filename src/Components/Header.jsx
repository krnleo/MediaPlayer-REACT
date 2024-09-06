import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand  className='fw-bolder' style={{color:'white',fontSize:'25px'}}>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
            <i class="fa-solid fa-cloud-arrow-up fa-beat me-2"></i>
             Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header