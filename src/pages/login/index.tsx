import React, { useState } from 'react'

import { useAuth } from '../../contexts/auth'
import { Container, Content, Input, Form, Button, Collumn } from './styles'

const Login: React.FC = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  async function handleLogin() {
    login(email, pass)
  }

  return (
    <Container>
      <Content>
        <h1 style={{ marginBottom: '50px', color: '#9C67DF' }}>
          Gerenciador de Estabelecimento
        </h1>
        <Collumn>
          <Form>
            <Input
              name="Email"
              placeholder="Email"
              onChange={e => {
                e.preventDefault()
                setEmail(e.target.value)
              }}
            />
            <Input
              name="Senha"
              placeholder="Senha"
              onChange={e => {
                e.preventDefault()
                setPass(e.target.value)
              }}
            />
          </Form>
          <Button onClick={handleLogin}>
            <span style={{ color: '#fff' }}>Entrar</span>
          </Button>
        </Collumn>
      </Content>
    </Container>
  )
}
export default Login
