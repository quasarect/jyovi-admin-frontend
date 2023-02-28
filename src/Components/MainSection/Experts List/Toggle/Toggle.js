import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Toggle = ({ data }) => {
  return (
    <div className='toggle'>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Total Earnings</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                Total Withdrawn :{' '}
                <p> ₹ {data.totalAmount - data.notWithrawedAmount}</p>
              </li>
              <li>
                Total Not Withdrwan : <p> ₹ {data.notWithrawedAmount}</p>
              </li>
              <li>
                Total Earning : <p> ₹ {data.totalAmount}</p>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Toggle
