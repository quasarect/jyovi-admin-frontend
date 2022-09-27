import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Toggle2 = () => {
  return (
    <div className='toggle'>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Call History</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>16/10/2020 14:23 <p>10 mins</p></li>
              <li>12/2/2021 11:00 <p>30 mins</p></li>
              <li>21/3/2021 19:30 <p>1 hour</p></li>
              <li>16/10/2020 14:23 <p>40 secs</p></li>
              <li>12/2/2021 11:00 <p>30 mins</p></li>
              <li>21/3/2021 19:30 <p>1 hour</p></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Toggle2