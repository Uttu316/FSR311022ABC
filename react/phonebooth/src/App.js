import './App.css'
import Home from './pages/home'
import Login from './pages/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Home />} />
        <Route path='/setting' element={<Home />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
