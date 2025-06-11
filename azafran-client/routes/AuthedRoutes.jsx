import { Route, Routes, useNavigate } from 'react-router'
import { Home } from '../src/pages/Home/Home'
import { useEffect } from 'react'
const AuthedRoutes = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('accessToken')) {
            navigate('/login')
        }
    }, [])

    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export { AuthedRoutes }