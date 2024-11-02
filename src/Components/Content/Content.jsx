import React, { useEffect, useState } from 'react'
import icon1 from '../../images/Group 221.svg'
import icon2 from '../../images/Group 214.svg'
import icon3 from '../../images/Group 213.svg'
import icon4 from '../../images/Group 96.svg'
import source from '../../images/source.svg'
import './Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Content = ({setShowForm}) => {
  const [clients, setclients] = useState([])
  const ClientData=async()=>{
    let result = await axios ('https://jsonplaceholder.typicode.com/users')
    setclients(result.data)
  }
  useEffect(()=>{
    ClientData();
  },[])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
            <div className="col-3 bg-light col3border border rounded-3 p-4 shadow">
                <div className="d-flex justify-content-around">
                <img src={icon1} alt="" className='icon1bg rounded-circle p-3'/>
                <p className='icon1txt'>Total Clients</p> 
                </div>
                <div className="d-flex justify-content-around mt-3">
                <p className='icon1txt2'>52</p>
                <p className='icon1txt3'>70% <img src={icon2} alt="" /></p>
                </div>
            </div>
            <div className="col-3 bg-light col3border border rounded-3 p-4 shadow">
                <div className="d-flex justify-content-around">
                <img src={icon1} alt="" className='icon2bg rounded-circle p-3'/>
                <p className='icon1txt'>New Clients</p> 
                </div>
                <div className="d-flex justify-content-around mt-3">
                <p className='icon1txt2'>5</p>
                <p className='icon3txt'>03% <img src={icon3} alt="" /></p>
                </div>
            </div>
            <div className="col-3 bg-light col3border border rounded-3 p-4 shadow">
                <div className="d-flex justify-content-around">
                <img src={icon1} alt="" className='icon1bg rounded-circle p-3'/>
                <p className='icon1txt'>Contacted Clients</p> 
                </div>
                <div className="d-flex justify-content-around mt-3">
                <p className='icon1txt2'>40</p>
                <p className='icon1txt3'>70% <img src={icon2} alt="" /></p>
                </div>
            </div>
            <div className="col-3 bg-light col3border border rounded-3 p-4 shadow">
                <div className="d-flex justify-content-around">
                <img src={icon1} alt="" className='icon2bg rounded-circle p-3'/>
                <p className='icon1txt'>IN Progress Clients</p> 
                </div>
                <div className="d-flex justify-content-around mt-3">
                <p className='icon1txt2'>25</p>
                <p className='icon3txt'>03% <img src={icon3} alt="" /></p>
                </div>
            </div>

        </div>
        <div className="row mt-4">
        <div className="d-flex justify-content-between vw-100 p-0">
            <div>
            <span className='fs-5 clienttxt'>Clients</span><input type="text" placeholder='Status Filter' className='mx-3 inputs' />
            <input type="text" placeholder='Label Filter' className='inputs'/>
            </div>
            <div >
            <button className='button1'><img src={icon4} alt="upload" className='mx-2'/>Upload CVS</button>
            <button className='ms-2 button2' onClick={()=>{setShowForm(true)}}><FontAwesomeIcon icon={faPlus} className='mx-2'/>New Client</button>
            </div>
            </div>
            </div>
            <div className="row mt-4  ">
            <table class="table table-hover">
  <thead className='bg-success'>
    <tr className='table-secondary'>
                <td>Client Name</td>
                <td>Company Name</td>
                <td>Email</td>
                <td>Phone No.</td>
                <td>Status</td>
                <td>Leads Label</td>
                <td>Shared Proposal</td>
                <td>Source</td>
    </tr>
  </thead>
  <tbody>
  {clients.map((v,i)=>{
    return(
    <tr>
    <td >{v.name}</td>
                <td>{v.company.name}</td>
                <td>{v.email}</td>
                <td>{v.phone}</td>
                <td style={{color: '#10898F'}}><p className='status'>New</p></td>
                <td style={{color: '#C72C88'}} className='text-center'><p className='status'>HOT</p></td>
                <td>Branding,designing</td>
                <td ><div className='d-flex justify-content-center source '>
                <img src={source} alt='source icon'/>
                </div>
                </td>
    </tr>
  )
  })}
  </tbody>
</table>
            </div>
        </div>
    </>
  )
}

export default Content
