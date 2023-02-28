import React, { useState, useCallback } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Toggle from '../Toggle/Toggle'
import Toggle2 from '../Toggle/Toggle2'
import Form from 'react-bootstrap/Form'

import { useHttpClient } from '../../../../hooks/httpHook'

const Modals = ({ id }) => {
  const { sendRequest } = useHttpClient()

  const [show, setShow] = useState(false)

  const [expert, setExpert] = useState(null)
  const [callDetails, setCallDetails] = useState({})

  const fetchExpert = useCallback(async () => {
    try {
      const fetched = await sendRequest(
        '/api/admin/expert',
        'POST',
        JSON.stringify({
          expertId: id,
        }),
        {
          'Content-Type': 'application/json',
        }
      )
      if (fetched.expert) {
        setExpert(fetched.expert)
      }
      if (fetched.calls) {
        setCallDetails(fetched.calls)
      }
      console.log(fetched.expert.isActive)
    } catch (err) {}
  }, [sendRequest, id])

  const changeHandler = async e => {
    try {
      await sendRequest(
        '/api/admin/expert/status',
        'POST',
        JSON.stringify({
          status: e.target.checked,
          expertId: id,
        }),
        {
          'Content-Type': 'application/json',
        }
      )
      setExpert(prevState => ({
        ...prevState,
        isActive: !prevState.isActive,
      }))
    } catch (err) {}
  }

  return (
    <div className='modals'>
      <>
        <Button
          variant='primary'
          onClick={() => {
            if (show) {
              setShow(false)
            } else {
              fetchExpert()
              setShow(true)
            }
          }}
        >
          Know More
        </Button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName='modal-90w'
          aria-labelledby='example-custom-modal-styling-title'
        >
          {expert && (
            <>
              <Modal.Header closeButton>
                <Modal.Title id='example-custom-modal-styling-title'>
                  Robert Brown
                  <div className='switch'>
                    <Form>
                      <Form.Check
                        type='switch'
                        id='custom-switch'
                        checked={expert.isActive}
                        onChange={changeHandler}
                      />
                    </Form>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='modals-body'>
                  <img
                    src={
                      process.env.REACT_APP_ENDPOINT +
                      '/api/images/' +
                      expert.store.profileImage
                    }
                    alt='expert'
                  />
                </div>

                <div className='modals-body-text'>
                  <h4>Personal Information</h4>
                  <div className='details-form'>
                    <form>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            First Name: <span>{expert.name}</span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            Email id: <span>{expert.email}</span>
                          </p>
                        </div>
                        <div className='form-col'>
                          <p>
                            Phone - <span>{expert.phone}</span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            Address - <span>{expert.address.address}</span>
                          </p>
                        </div>
                        <div className='form-col'>
                          <p>
                            State: <span>{expert.address.state}</span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            City: <span>{expert.address.city}</span>
                          </p>
                        </div>
                        <div className='form-col'>
                          <p>
                            Date of Birth: <span>{expert.dateOfBirth}</span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            Gender: <span>{expert.gender}</span>
                          </p>
                        </div>
                        <div className='form-col'>
                          <p>
                            Language: <span>{expert.languages}</span>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className='modals-body-text'>
                  <h4>Bank Details</h4>
                  <div className='details-form'>
                    <form>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            Account Number:{' '}
                            <span>{expert.finance.bankAccountNumber}</span>
                          </p>
                        </div>
                        <div className='form-col'>
                          <p>
                            Account Name:{' '}
                            <span>{expert.finance.bankAccountName}</span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            PAN Number - <span>{expert.finance.panNumber}</span>
                          </p>
                        </div>
                        <div className='form-col'>
                          <p>
                            Adhaar Number -{' '}
                            <span>{expert.finance.aadharNumber}</span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            Bank Name: <span>{expert.finance.bankName}</span>
                          </p>
                        </div>
                        <div className='form-col'>
                          <p>
                            Bank Branch Name:{' '}
                            <span>{expert.finance.bankBranchName}</span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-col full'>
                          <p>
                            IFSC Code <span>{expert.finance.bankIFSC}</span>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className='modals-body-text'>
                  <h4>Professional Details</h4>
                  <div className='details-form'>
                    <form>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            Degree{' '}
                            <span>{expert.professionalDetails.degree}</span>
                          </p>
                        </div>
                        <div className='form-col'>
                          <p>
                            University Name:{' '}
                            <span>{expert.university.name}</span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            University State -{' '}
                            <span>{expert.university.state}</span>
                          </p>
                        </div>
                        <div className='form-col'>
                          <p>
                            Experience(in years) -{' '}
                            <span>
                              {expert.professionalDetails.experienceYears} years
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            Experience(in field){' '}
                            <span>
                              {expert.professionalDetails.experienceField}
                            </span>
                          </p>
                        </div>
                        <div className='form-col'>
                          <p>
                            Phone or Laptop:{' '}
                            <span>{expert.communicationDevice}</span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-col'>
                          <p>
                            Profession learned from:{' '}
                            <span>{expert.professionalDetails.source}</span>
                          </p>
                        </div>
                        <div className='form-col'>
                          <p>
                            Hours Contribution daily:{' '}
                            <span>{expert.dailyContributionHours} hours</span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        {/* <div className="form-col">
                                            <p>Working status and Earning: <span>Yes, 30k</span></p>
                                        </div> */}
                        <div className='form-col'>
                          <p>
                            Minimum Earning Slab{' '}
                            <span>{expert.earningSlab}/month</span>
                          </p>
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='form-col proof-img'>
                          <a
                            href={
                              process.env.REACT_APP_ENDPOINT +
                              '/api/docs/degrees/' +
                              expert.store.degree
                            }
                          >
                            Degree Proof
                          </a>
                        </div>
                        <div className='form-col proof-img'>
                          <a
                            href={
                              process.env.REACT_APP_ENDPOINT +
                              '/api/docs/experiences/' +
                              expert.store.experience
                            }
                          >
                            Experience Proof
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className='modals-body-text'>
                  <h4>History Details</h4>
                  <div className='details-form'>
                    <form>
                      <div className='form-row history'>
                        <div className='form-col'>
                          <div>
                            <Toggle data={callDetails} />
                          </div>
                        </div>
                      </div>
                      <div className='form-row history'>
                        <div className='form-col'>
                          <div>
                            <Toggle2 data={callDetails} />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </Modal.Body>
            </>
          )}
        </Modal>
      </>
    </div>
  )
}

export default Modals
