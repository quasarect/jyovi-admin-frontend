import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalForm = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='modal-form'>
                <Button variant="primary" onClick={handleShow}>
                    Edit
                </Button>

                <Modal show={show} onHide={handleClose}  backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Porfession Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="name"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Profession</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="sub-profession"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Profession</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="profession"
                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default ModalForm