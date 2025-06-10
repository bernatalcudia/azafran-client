import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Flex, Input, Typography } from 'antd'

const { Title } = Typography


const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errormsg, setErrorMsg] = useState('')

    const navigate = useNavigate()

    const handleButtonLogin = () => {
        console.log(user, password)
        fetch('http://localhost:8000/users/login', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ username: user, password: password })
        })
            .then(async (res) => {
                console.log(res)
                const data = await res.json()
                if (!res.ok && data.msg) {
                    setErrorMsg(data.msg)
                } else {
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate('/')
                }
            })
            .catch((error) => { console.warn(error) })
    }

    return (
        <Flex gap={'8px'} vertical style={{ width: '400px' }}>
            <Title>Login</Title>
            <Input value={user} placeholder='User' onChange={(event) => setUser(event.target.value)} />
            <Input value={password} placeholder='Password' onChange={(event) => setPassword(event.target.value)} type='password' />
            <Button type='primary' disabled={!user.trim() || !password.trim()} onClick={handleButtonLogin}>
                Log in
            </Button>
        </Flex>
    )
}

export { Login }