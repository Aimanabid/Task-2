import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import '../../App.css'
import '../Sidebar/Sidebar.css'
import './NewClient.css'

const NewClient = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className="row">
    <div className="col-2 column2 bg-light" >
      <Sidebar/>
      </div>
      <div className="col-10 column10">
      <Navbar/>
      <div className="form-container ">
      <p className='formtext fs-3 text-center fw-bold'>Create Account</p>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="form-input"
          
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="form-input" required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit" className="form-button">Sign Up</button>
      </form>
      <div className="form-footer">
        <p className='formtext'>Already have an account? <b>Login here</b></p>
      </div>
    </div>
      </div>
    </div>
    </div>
      
    </>
  )
}

export default NewClient
