import React from 'react'
import { WithdrawData } from './WithdrawData'

const Withdraw = () => {

  const data = WithdrawData

  return (
    <div className='approve-section'>
      <div className='approve-container'>
        <h4>Withdraw Requests</h4>
        {data.map((request) => {
          return (
            <div key={request.id} className="approve-list">
              <img src={request.img} />
              <h5>{request.name}<br />
                <span>{request.pend}</span>
              </h5>
              <div className='apr-btn'>
                <button className='acc'>Approve</button>
                <button className='rej'>Reject</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Withdraw