import React from 'react'

import { IoIosAddCircle } from 'react-icons/io'

import { Container, Content, Header } from './styles'

const ManagerEstablishmentInfo: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <h1 style={{ color: '#472C50' }}> Gerenciar estabelecimento</h1>
          <IoIosAddCircle size={60} color="#9C67DF" />
        </Header>
      </Content>
    </Container>
  )
}
export default ManagerEstablishmentInfo
