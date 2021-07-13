import React from 'react'
import { Container, Content, Input, Form, Button, Collumn } from './styles'


const Register: React.FC = () => {
  

  return  (
    <Container>
    <Content>
      <h1 style={{    color: "#9C67DF"}}>Gerenciador de Estabelecimento</h1>
      <Collumn>
        <Form>
          <Input name="name" placeholder="Nome da empresa"/> 
          <Input name="CNPJ" placeholder="CNPJ"/>
          <Input name="Email" placeholder="Email"/>
          <Input name="Senha" placeholder="Senha"/>
        </Form>
        <Button>
          <span style={{color: '#fff'}}>Cadastrar conta</span>
        </Button>
      </Collumn>
    </Content>
  </Container>
  ) 
}
export default Register
