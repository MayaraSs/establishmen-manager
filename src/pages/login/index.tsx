import React, {  useState } from 'react'
import { Container, Content, Input, Form, Button, Collumn } from './styles'
import { useAuth } from '../../contexts/auth';


const Login: React.FC = () => {
  const { signed, login } = useAuth();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  console.log(signed);
  async function handleLogin() {
    login(
      email,
      pass,
    );
  }

  return  (
    <Container>
      <Content>
        <h1 style={{     marginBottom: '50px', color: "#9C67DF"}}>Gerenciador de Estabelecimento</h1>
        <Collumn>
          <Form>
            <Input name="Email" placeholder="Email" onChange={(e) => {
              e.preventDefault()
              setEmail(e.target.value);
            }}/>
            <Input name="Senha" placeholder="Senha" onChange={(e) => {
              e.preventDefault()
              setPass(e.target.value);
            }}/>
          </Form>
          <Button onClick={handleLogin}>
            <span style={{color: '#fff'}}>Entrar</span>
          </Button>
        </Collumn>
      </Content>
    </Container>
  ) 
}
export default Login
