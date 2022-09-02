import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import SidebarMobile from './SidebarMobile'

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className='sidebar'>
                <h3>Admin Panel</h3>
                <div className="sidebar-options">
                    <Link to="/"><p>Requests</p></Link>
                    <Link to="/experts"><p>Experts</p></Link>
                    <Link to="/professions"><p>Professions</p></Link>
                    <Link to="/withdrawal"><p>Withdrawal</p></Link>

                </div>
            </div>

            <div className="sidebar-phone">
                <SidebarMobile />
            </div>
        </div>
    )
}

export default SideBar