import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <>
    
      <div className="d-flex justify-content-between p-3 mt-2">
      <p className='navbartxt'>Sales Lead</p>
      <div className="search-container">
      <input type="text" name="search" placeholder="Search.." /> <FontAwesomeIcon icon={faSearch}/> </div>
      </div>
    </>
  )
}

export default Navbar
