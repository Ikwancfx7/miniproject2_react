// import { useState } from 'react'
import LoginPages from '../pages/LoginPages'
import Dashboard from '../pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPages from '../pages/ResgisterPages'
import ProtectedRouted from '../components/ProtectedRouted'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRouted><Dashboard/></ProtectedRouted>}/>
        <Route path='/login' element={<LoginPages/>}/>
        <Route path='/daftar' element={<RegisterPages/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
