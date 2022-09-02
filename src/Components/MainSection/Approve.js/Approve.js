import React from 'react'
import './approve.css'
import { AproveData } from './AproveData'

const Approve = () => {

  const data = AproveData

  return (
    <div className='approve-section'>
      <div className='approve-container'>
        <h4>Pending Requests</h4>
        {data.map((request) => {
          return (
            <div key={request.id} className="approve-list">
              <img src={request.img} />
              <h5>{request.name}<br />
                <span>{request.prof}</span>
              </h5>
              <div className='apr-btn'>
                <button className='acc'>Accept</button>
                <button className='rej'>Reject</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Approve