import React, { useState } from 'react'

import { AiFillCloseCircle } from 'react-icons/ai'

import { useEstablishment } from '../../contexts/establishment'
import { Input } from '../../pages/login/styles'
import { Modal, Form, Header, Button } from './styles'

interface Props {
  handleClose: () => void
  show: boolean
}

const ModalFactory: React.FC<Props> = ({ handleClose, show }: Props) => {
  const { add, getEstablishments } = useEstablishment()

  const [name, setName] = useState('')
  const [locale, setLocale] = useState('')
  const [cnpj, setCnpj] = useState('')

  return (
    <>
      <Modal>
        <Header>
          <h1>Adicionar Estabelecimento</h1>
          <AiFillCloseCircle
            size={30}
            color="#9C67DF"
            style={{
              right: '0px',
              position: 'absolute',
              margin: '-7px 10px 0px 0px',
            }}
            onClick={handleClose}
          />
        </Header>
        <Form>
          <Input
            name="Name"
            placeholder="Name"
            onChange={e => {
              e.preventDefault()
              setName(e.target.value)
            }}
          />
          <Input
            name="Cnpj"
            placeholder="Cnpj"
            onChange={e => {
              e.preventDefault()
              setCnpj(e.target.value)
            }}
          />
          <Input
            name="Localização"
            placeholder="Localização"
            onChange={e => {
              e.preventDefault()
              setLocale(e.target.value)
            }}
          />
        </Form>
        <Button
          onClick={async () => {
            add({
              locale,
              cnpj,
              name,
            })
            getEstablishments()

            handleClose()
          }}
        >
          Adicionar
        </Button>
      </Modal>
    </>
  )
}
export default ModalFactory
