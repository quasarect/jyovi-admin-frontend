import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'
import { HiOutlineMenu } from 'react-icons/hi'

const SidebarMobile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='phone-view'>
                <HiOutlineMenu onClick={handleShow} />

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Admin Panel</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='sidebar-mobile'>
                            <div className="sidebar-mobile-options" onClick={handleClose}>
                                <Link to="/"><p>Requests</p></Link>
                                <Link to="/experts"><p>Experts</p></Link>
                                <Link to="/professions"><p>Professions</p></Link>
                                <Link to="/withdrawal"><p>Withdrawal</p></Link>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
}

export default SidebarMobile