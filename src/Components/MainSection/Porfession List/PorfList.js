import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProfData } from './ProfData';
import './prof.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import ModalForm from './ModalForm';
import AddForm from './AddForm';

const PorfList = () => {
    const profData = ProfData;
    return (
        <div className='expert-list prof-list'>
            <h3 >List of Experts</h3>
            <AddForm />
            <div className='experts-list-cards'>
                <Container>
                    <Row>
                        {profData.map((data) => {
                            return (
                                <Col sm>
                                    <Card>
                                        <Card.Body>
                                            <Card.Text>
                                                {data.prof}
                                            </Card.Text>
                                        </Card.Body>
                                        <div className='prof-btn'>
                                            <button className='edit'>
                                                <ModalForm />
                                            </button>
                                            <button className='dlt'>Delete</button>
                                        </div>
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

export default PorfList