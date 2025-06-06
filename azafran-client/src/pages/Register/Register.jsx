import { Button, Flex, Input } from 'antd'
const Register = () => {
    return (
        <Flex gap={'8px'} style={{ width: '400px' }} vertical>
            <h1>Register</h1>
            <Input placeholder='User'></Input>
            <Input placeholder='Password'></Input>
            <Input placeholder='Repeat password'></Input>
            <Button type='primary'>Register</Button>
        </Flex>
    )
}

export { Register }