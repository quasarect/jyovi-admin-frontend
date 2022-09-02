import React from 'react'
import './expert.css'
import { ExpertsData } from './ExpertsData'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modals from './Modal';

const ExpertsList = () => {

  const expertdata = ExpertsData

  return (
    <div className='expert-list'>
      <h3 >List of Experts</h3>
      <div className='experts-list-cards'>
        <Container>
          <Row>
            {expertdata.map((data) => {
              return (
                <Col sm>
                  <Card>
                    <img src={data.img} />
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Text>
                        {data.prof}
                      </Card.Text>
                      <Modals />
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ExpertsList