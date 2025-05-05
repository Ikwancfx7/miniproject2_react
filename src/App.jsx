// import { useState } from 'react'
import LoginPages from '../pages/LoginPages'
import Home from '../pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPages from '../pages/ResgisterPages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPages/>}/>
        <Route path='/daftar' element={<RegisterPages/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
