import React from 'react'
import { Container, Content, Frame, Header} from './styles'
import { FaTrash } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const ManagerEstablishmentInfo: React.FC = () => {
  

  return  (
    <Container>
      <Content>
      <Header>
        <h1 style={{ color: '#472C50'}}> Gerenciar Contas</h1>
        <IoIosAddCircle size={60} color={'#9C67DF'} />
      </Header>
        <Frame>
          <span style={{margin: '20px', color: '#A6A4A4'}}> Fulano</span>
          <FaTrash size={20} color={'#9C67DF'} style={{margin: '20px'}}/>
        </Frame>
      </Content>
    </Container>
  ) 
}
export default ManagerEstablishmentInfo
