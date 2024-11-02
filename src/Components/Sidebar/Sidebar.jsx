import React from 'react'
import './Sidebar.css'
import Vector1 from '../../images/Vector.svg'
import Vector2 from '../../images/Group 211.svg'
import Vector3 from '../../images/Vector (2).svg'
import Vector4 from '../../images/Vector (3).svg'
import Vector5 from '../../images/Vector (4).svg'
import Vector6 from '../../images/Vector (5).svg'
import image1 from '../../images/Ellipse 22.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faChartLine, faMessage, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <>
        <div className='sidebarstick d-flex flex-column vh-100 '>
            <ul className='sidebar text-center '>
                <li className='my-4'>
                <div className="d-flex">
                <img src={Vector1} alt="" />
                <p className='sidebartxt mx-2'>Dashboard</p>
                </div>
                </li>
                <li className='my-4'> <div className="d-flex ">
                <img src={Vector2} alt="" />
                <p className='sidebartxt mx-2'>Clients</p>
                </div></li>
                <li className='my-4'> <div className="d-flex ">
                <img src={Vector3} alt="" />
                <p className='sidebartxt mx-2'>Proposals</p>
                </div></li>
                <li className='my-4'> <div className="d-flex ">
                <img src={Vector4} alt="" />
                <p className='sidebartxt mx-2'>Projects</p>
                </div></li>
                <li className='my-4'> <div className="d-flex ">
                <img src={Vector5} alt="" />
                <p className='sidebartxt mx-2'>Team</p>
                </div></li>
                <li className='my-4'> <div className="d-flex ">
                <img src={Vector6} alt="" />
                <p className='sidebartxt mx-2'>Calendar</p>
                </div></li>
                <li className='my-4'> <div className="d-flex ">
                <FontAwesomeIcon icon={faChartLine}/>
                <p className='sidebartxt mx-2'>Report</p>
                </div></li>
                <div className='d-flex justify-content-around sidebaricons'>
                <FontAwesomeIcon icon={faMessage} className=''/>
                <FontAwesomeIcon icon={faBell} className='mx-4'/>
                <FontAwesomeIcon icon={faQuestionCircle}/>
                </div>
            </ul>
            <div className='d-flex'>
          <div className='mt-4'>
                <img src={image1} alt="personImg"  />
                </div>
                <div>
                  <h4 className='sidebartxt2'>Unknown</h4>
                  <p className='sidebartxt3'>unknown@gmail.com</p>
                </div>
                </div>
                <div>
                  <p className='sidebartxt4'>© 2024 centrixhub.ai</p>
                </div>
        </div>
      
    </>
  )
}

export default Sidebar
