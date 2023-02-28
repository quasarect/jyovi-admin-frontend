import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Toggle2 = ({ data }) => {
  return (
    <div className='toggle'>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Call History</Accordion.Header>
          <Accordion.Body>
            <ul>
              {data.callHistory.map(call => {
                return (
                  <li key={call._id}>
                    {' '}
                    {new Date(call.createdAt).toLocaleString()}{' '}
                    <p>{call.amount} rs</p>
                  </li>
                )
              })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Toggle2
