import './App.css'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './shared/pages/auth/login/Login'
import Register from './shared/pages/auth/register/Register'
import NotFound from './shared/pages/not-found/NotFound'
import Layout from './shared/pages/layout/Layout'
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/login'} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/main/*' element={<Layout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
