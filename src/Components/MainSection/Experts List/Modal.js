import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import profile from '../../../Image/profile.jpeg'
import degree from '../../../Image/degree.png'
import Toggle from './Toggle';
import Toggle2 from './Toggle2';
import Switch from './Switch';

const Modals = () => {

    const [show, setShow] = useState(false);

    return (
        <div className='modals'>
            <>
                <Button variant="primary" onClick={() => setShow(true)}>
                    Know More
                </Button>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Robert Brown
                            <div className='switch'>
                                <Switch />
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modals-body'>
                            <img src={profile} />
                        </div>
                        <div className='modals-body-text'>
                            <h4>Personal Information</h4>
                            <div className='details-form'>
                                <form>
                                    <div className="form-row">
                                        <div className="form-col">
                                            <p>First Name: <span>Robert</span></p>
                                        </div>
                                        <div className="form-col">
                                            <p>Last Name: <span>Brown</span></p>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-col">
                                            <p>Email id: <span>robert.brown22@gmail.com</span></p>
                                        </div>
                                        <div class="form-col">
                                            <p>Phone - <span>8765487654</span></p>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-col">
                                            <p>Address - <span>32 Street, New Delhi</span></p>
                                        </div>
                                        <div class="form-col">
                                            <p>State: <span>Delhi</span></p>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-col">
                                            <p>City: <span>Noida</span></p>
                                        </div>
                                        <div class="form-col">
                                            <p>Date of Birth: <span>22/02/1990</span></p>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-col">
                                            <p>Gender: <span>Male</span></p>
                                        </div>
                                        <div class="form-col">
                                            <p>Language: <span>Hindi, English</span></p>
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
                                            <p>Account Number: <span>0123456789</span></p>
                                        </div>
                                        <div className="form-col">
                                            <p>Account Name: <span>Rober Brown</span></p>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='form-col'>
                                            <p>PAN Number - <span>ALWPG5809L</span></p>
                                        </div>
                                        <div className="form-col">
                                            <p>Adhaar Number - <span>1234 5678 1234</span></p>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='form-col'>
                                            <p>Bank Name: <span>Axis Bank</span></p>
                                        </div>
                                        <div className="form-col">
                                            <p>Bank Branch Name: <span>Noida Branch</span></p>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='form-col full'>
                                            <p>IFSC Code <span>123456789123456789</span></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='modals-body-text'>
                            <h4>Professional Details</h4>
                            <div className='details-form'>
                                <form>
                                    <div className="form-row">
                                        <div className="form-col">
                                            <p>Degree <span>MBBS</span></p>
                                        </div>
                                        <div className="form-col">
                                            <p>University Name: <span>ABC College</span></p>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col">
                                            <p>University State - <span>Delhi</span></p>
                                        </div>
                                        <div className="form-col">
                                            <p>Experience(in years) - <span>4 years</span></p>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col">
                                            <p>Experience(in field) <span>Neurology</span></p>
                                        </div>
                                        <div className="form-col">
                                            <p>Phone or Laptop: <span>Yes</span></p>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col">
                                            <p>Profession learned from: <span>ABC institute</span></p>
                                        </div>
                                        <div className="form-col">
                                            <p>Hours Contribution daily: <span>10 hours</span></p>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col">
                                            <p>Working status and Earning: <span>Yes, 30k</span></p>
                                        </div>
                                        <div className="form-col">
                                            <p>Minimum Earning Slab <span>10k/month</span></p>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col proof-img" >
                                            <p>Degree Proof</p><img src={degree} />
                                        </div>
                                        <div className="form-col proof-img">
                                            <p>Experience Proof</p><img src={degree} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='modals-body-text'>
                            <h4>History Details</h4>
                            <div className='details-form'>
                                <form>
                                    <div className="form-row history">
                                        <div className="form-col">
                                            <div><Toggle /></div>
                                        </div>
                                    </div>
                                    <div className="form-row history">
                                        <div className="form-col">
                                            <div><Toggle2 /></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </Modal.Body>
                </Modal>
            </>
        </div>
    )
}

export default Modals