import React, { useState, useEffect } from 'react'

import { FaTrash } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'

import ModalFactory from '../../components/Modal'
import { useEstablishment } from '../../contexts/establishment'
import { Container, Content, Frame, Header } from './styles'

const AddCompany: React.FC = () => {
  const {
    getEstablishments,
    removeEstablishment,
    establishments,
  } = useEstablishment()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  useEffect(() => {
    async function get() {
      await getEstablishments()
    }
    get()
  }, [])

  return (
    <Container>
      <Content>
        <Header>
          <h1 style={{ color: '#472C50' }}> Adicionar Estabelecimentos</h1>
          <IoIosAddCircle
            size={60}
            color="#9C67DF"
            onClick={() => setShow(!show)}
          />
        </Header>
        {establishments.length > 0 &&
          establishments.map(e => {
            return (
              <Frame>
                <span style={{ margin: '20px', color: '#A6A4A4' }}>
                  {e.name}
                </span>
                <span style={{ margin: '20px', color: '#A6A4A4' }}>
                  {e.cnpj}
                </span>
                <span style={{ margin: '20px', color: '#A6A4A4' }}>
                  {e.locale}
                </span>
                <FaTrash
                  size={20}
                  color="#9C67DF"
                  style={{ margin: '20px' }}
                  onClick={() => {
                    if (e.id) {
                      removeEstablishment(e.id)
                      getEstablishments()
                    }
                  }}
                />
              </Frame>
            )
          })}
      </Content>
      {show && <ModalFactory show={show} handleClose={handleClose} />}
    </Container>
  )
}
export default AddCompany
