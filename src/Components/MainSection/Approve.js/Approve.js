import { useState, useEffect, useCallback } from 'react'
import './approve.css'

import { useNavigate } from 'react-router-dom'

import { useHttpClient } from '../../../hooks/httpHook'

const Approve = () => {
  const { sendRequest } = useHttpClient()
  const navigate = useNavigate()
  const [requests, setRequests] = useState([])

  const fetchRequests = useCallback(async () => {
    try {
      const fetched = await sendRequest('/api/admin/pending')

      if (!fetched) return

      if (fetched.requests && fetched.requests.length > 0) {
        console.log(fetched.requests)
        setRequests(fetched.requests)
      }
    } catch (err) {}
  }, [sendRequest])

  const approveRequest = async id => {
    try {
      const fetched = await sendRequest(
        '/api/admin/expert/status',
        'POST',
        JSON.stringify({
          status: true,
          expertId: id,
        }),
        {
          'Content-Type': 'application/json',
        }
      )

      if (!fetched) return

      navigate('/')
    } catch (err) {}
  }

  useEffect(() => {
    fetchRequests()
  }, [fetchRequests])

  return (
    <div className='approve-section'>
      <div className='approve-container'>
        <h4>Pending Requests</h4>
        {requests.map(request => {
          return (
            <div key={request._id} className='approve-list'>
              <img
                src={
                  process.env.REACT_APP_ENDPOINT +
                  '/api/images/' +
                  request.store.profileImage
                }
                alt='profile'
              />
              <h5>
                {request?.name}
                <br />
                <span>{request.professionalDetails.profession?.name}</span>
              </h5>
              <div className='apr-btn'>
                <button
                  className='acc'
                  onClick={() => approveRequest(request._id)}
                >
                  Accept
                </button>
                {/* <button className='rej'>Reject</button> */}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Approve
