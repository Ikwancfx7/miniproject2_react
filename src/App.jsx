import { useState } from 'react'
import LoginPages from '../pages/LoginPages'
import Dashboard from '../pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPages from '../pages/ResgisterPages'
import ProtectedRouted from '../components/ProtectedRouted'
import ForgotPasswordPages from '../pages/ForgotPasswordPages'
import ListUser from '../components/ListUser'
import SingleUser from '../components/SingleUser'
import LandingPage from '../pages/LandingPages'

function App() {
  const [currentPage, setCurrentPage] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<LandingPage currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
        <Route path='/dashboard' element={<ProtectedRouted><Dashboard currentPage={currentPage} setCurrentPage={setCurrentPage}/></ProtectedRouted>}>
          <Route index element={<ListUser/>}/>
          <Route path='single-user/:id' element={<SingleUser/>}/>
        </Route>
        <Route path='/login' element={<LoginPages currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
        <Route path='/register' element={<RegisterPages currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
        <Route path='/forgot-password' element={<ForgotPasswordPages isForgotPassword={isForgotPassword} setIsForgotPassword={setIsForgotPassword}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
