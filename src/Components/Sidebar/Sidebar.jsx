import React from 'react'
import './Sidebar.css'
import Vector1 from '../../images/Vector.svg'
import Vector2 from '../../images/Group 211.svg'
import Vector3 from '../../images/Vector (2).svg'
import Vector4 from '../../images/Vector (3).svg'
import Vector5 from '../../images/Vector (4).svg'
import Vector6 from '../../images/Vector (5).svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChartLine } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <>
        <div className='sidebarstick d-flex justify-content-center align-items-center flex-column vh-100 '>
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
            </ul>
        </div>
      
    </>
  )
}

export default Sidebar
