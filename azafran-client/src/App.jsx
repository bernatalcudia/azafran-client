import { BrowserRouter, Route, Routes } from 'react-router'
import { Login } from './pages/Login/Login.jsx'
import { Register } from './pages/Register/Register.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
