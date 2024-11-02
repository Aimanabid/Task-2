import React from 'react'
import '../../App.css'
import '../Sidebar/Sidebar.css'
import './NewClient.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const NewClient = ({setShowForm}) => {
  return (
    <>

    <div className="form-container mt-6  ">
    <div className='d-flex justify-content-between'>
      <p className='formtext fs-3 text-center fw-bold'>Add Client</p>
      <FontAwesomeIcon icon={faClose} className='mt-3 crossicon' onClick={()=>{setShowForm(false)}}/>
      </div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          className="form-input"
          
          required
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          className="form-input" required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-input" required
        />
        
        <input
          type="tel"
          name="phone"
          placeholder="Phone No."
          className="form-input"
          required
        />
        <input
          type="text"
          name="proposal"
          placeholder="Shared Proposal"
          className="form-input"
          required
        />
        <button type="submit" className="form-button">Add</button>
      </form>
    </div>
      
    </>
  )
}

export default NewClient
