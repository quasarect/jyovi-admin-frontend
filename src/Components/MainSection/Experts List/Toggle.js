import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Toggle = () => {
    return (
        <div className='toggle'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Total Earnings</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Total Withdrawn : <p> ₹ 230</p></li>
                            <li>Total Not Withdrwan : <p> ₹ 70</p></li>
                            <li>Total Earning : <p> ₹ 300</p></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Toggle