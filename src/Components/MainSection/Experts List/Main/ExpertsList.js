import { useCallback, useState, useEffect } from 'react'
import './expert.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modals from '../Switch and Modal/Modal'

import { useHttpClient } from '../../../../hooks/httpHook'

const ExpertsList = () => {
  const { sendRequest } = useHttpClient()

  const [experts, setExperts] = useState([])

  const fetchExperts = useCallback(async () => {
    try {
      const fetched = await sendRequest('/api/admin/experts')
      if (fetched.experts && fetched.experts.length > 0) {
        setExperts(fetched.experts)
      }
    } catch (err) {}
  }, [sendRequest])

  useEffect(() => {
    fetchExperts()
  }, [fetchExperts])

  return (
    <div className='expert-list'>
      <h3>List of Experts</h3>
      <div className='experts-list-cards'>
        <Container>
          <Row>
            {experts.map(data => {
              return (
                <Col sm key={data._id}>
                  <Card>
                    <img
                      src={
                        process.env.REACT_APP_ENDPOINT +
                        '/api/images/' +
                        data.store.profileImage
                      }
                      alt='profile'
                    />
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Text>
                        {data.professionalDetails.profession.name}
                      </Card.Text>
                      <Modals id={data._id} />
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
