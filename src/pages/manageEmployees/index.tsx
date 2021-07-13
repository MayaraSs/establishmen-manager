import React from 'react'
import { Container, Content, Frame, Header } from './styles'
import { IoIosAddCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

const ManageEmployees: React.FC = () => {
  

  return  (
    <Container>
      <Content>
        <Header>
          <h1 style={{ color: '#472C50'}}> Gerenciar Funcionários</h1>
          <IoIosAddCircle size={60} color={'#9C67DF'} />
        </Header>
        <Frame>
          <span style={{margin: '20px', color: '#A6A4A4'}}> Energia</span>
          <span style={{margin: '20px', color: '#A6A4A4'}}> R$ 150, 00</span>
          <FaTrash size={20} color={'#9C67DF'} style={{margin: '20px'}}/>
        </Frame>
      </Content>
    </Container>
  ) 
}
export default ManageEmployees
