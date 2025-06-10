import { Button, Flex, Input, Typography } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Register = () => {
    const { Title } = Typography

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        user: '',
        password: '',
        repeatPassword: '',
    });

    const isButtonEnabled =
        formData.user &&
        formData.password &&
        formData.repeatPassword &&
        formData.password == formData.repeatPassword;

    const handleRegisterButtonClick = () => {
        fetch('http://localhost:8000/users/register', {
            headers: {
                'Content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ username: formData.user, password: formData.password })

        })
            .then((res) => {
                if (res.ok) {
                    console.log('user registered')
                    navigate('/login')
                } else {
                    console.error('error found', res.body)
                }
            })
            .catch((error) => console.error(error))
    };

    return (
        <Flex gap={'8px'} vertical style={{ width: '400px' }}>
            <Title>Register</Title>
            <Input
                value={formData.user}
                onChange={(event) =>
                    setFormData((data) => {
                        return { ...data, user: event.target.value };
                    })
                }
                placeholder='User'
            />
            <Input
                placeholder='password'
                type='password'
                value={formData.password}
                onChange={(event) =>
                    setFormData((data) => {
                        return { ...data, password: event.target.value };
                    })
                }
            />
            <Input
                placeholder='Repeat password'
                type='password'
                value={formData.repeatPassword}
                onChange={(event) =>
                    setFormData((data) => {
                        return { ...data, repeatPassword: event.target.value };
                    })
                }
            />
            <Button disabled={!isButtonEnabled} type='primary' onClick={handleRegisterButtonClick}>
                Register
            </Button>
        </Flex>
    )
}


export { Register }