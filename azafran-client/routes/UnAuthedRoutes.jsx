import { Route, Routes } from 'react-router'
import { Login } from '../src/pages/Login/Login'
import { Register } from '../src/pages/Register/Register'

const UnAuthedRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}

export { UnAuthedRoutes }
