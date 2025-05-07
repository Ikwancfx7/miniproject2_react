import React, { useState } from 'react'
import LoginPages from '../pages/LoginPages'
import Dashboard from '../pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPages from '../pages/ResgisterPages'
import ProtectedRouted from '../components/ProtectedRouted'
import ListUser from '../components/ListUser'
import SingleUser from '../components/SingleUser'

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<ProtectedRouted><Dashboard currentPage={currentPage} setCurrentPage={setCurrentPage}/></ProtectedRouted>}>
          <Route index element={<ListUser/>}/>
          {/* <Route path='users' element={<ListUser/>}/> */}
          <Route path='single-user/:id' element={<SingleUser/>}/>
        </Route>
        <Route path='/login' element={<LoginPages currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
        <Route path='/daftar' element={<RegisterPages currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
        {/* <Route path='/single-user/:id' element={<SingleUser/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
