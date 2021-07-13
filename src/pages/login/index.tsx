import React from 'react'
import { Container, Content, Input, Form, Button, Collumn } from './styles'


const Login: React.FC = () => {
  

  return  (
    <Container>
      <Content>
        <h1 style={{     marginBottom: '50px', color: "#9C67DF"}}>Gerenciador de Estabelecimento</h1>
        <Collumn>
          <Form>
            <Input name="Email" placeholder="Email"/>
            <Input name="Senha" placeholder="Senha"/>
          </Form>
          <Button>
            <span style={{color: '#fff'}}>Entrar</span>
          </Button>
        </Collumn>
      </Content>
    </Container>
  ) 
}
export default Login
