import React from 'react'
import './App.css'
import SideBar from './Components/Sidebar/SideBar'
import { Routes, Route } from 'react-router-dom'
import Approve from './Components/MainSection/Approve.js/Approve'
import ExpertsList from './Components/MainSection/Experts List/ExpertsList'
import PorfList from './Components/MainSection/Porfession List/PorfList'

const App = () => {
  return (
    <div className='app-container'>
      <div className="app-row">
        <div className="app-col1">
          <SideBar /> 
        </div>
        <div className="app-col2">
          <Routes>
            <Route path='/' element={<Approve />} />
            <Route path='/experts' element={<ExpertsList />} />
            <Route path='/professions' element={<PorfList />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App