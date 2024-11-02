import { faBell, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <>
    
      <div className="d-flex justify-content-between p-3 mt-2">
      <p className='navbartxt'>Sales Lead</p>
      <div className='d-flex'>
      <div className="search-container mx-2">
      <input type="text" name="search" placeholder="Search.." /> <FontAwesomeIcon icon={faSearch}/> 
      </div>
      <div className='navbaricons mb-2 pt-2 '>
        <FontAwesomeIcon icon={faBell} className='mx-3 '/>
        <FontAwesomeIcon icon={faMessage} className='me-3'/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Navbar
