import React, { useState } from 'react'
import LoginPages from '../pages/LoginPages'
import Dashboard from '../pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPages from '../pages/ResgisterPages'
import ProtectedRouted from '../components/ProtectedRouted'

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<ProtectedRouted><Dashboard currentPage={currentPage} setCurrentPage={setCurrentPage}/></ProtectedRouted>}/>
        <Route path='/login' element={<LoginPages currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
        <Route path='/daftar' element={<RegisterPages currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
