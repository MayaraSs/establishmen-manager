import React, { useState, useEffect } from 'react'
import { Container, Content, Frame, Header } from './styles'
import { IoIosAddCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { useEstablishment } from '../../contexts/establishment';
import { Button, Modal } from 'react-bootstrap';
import { Form, Input } from '../login/styles';

interface Props {
  handleShow: () => void
  handleClose: () => void
  show: boolean
}

const ModalFactory:  React.FC<Props> = ({handleClose, show}) => {
  const {add, getEstablishments} = useEstablishment()

  const [name, setName] = useState('')
  const [locale, setLocale] = useState('')
  const [cnpj, setCnpj] = useState('')

  return (
    <>
      <Modal show={show} onHide={handleClose}>
      <Modal.Body>

          <Form>
            <Input name="Name" placeholder="Name" onChange={(e) => {
              e.preventDefault()
              setName(e.target.value)
            }}/>
            <Input name="Cnpj" placeholder="Cnpj" onChange={(e) => {
              e.preventDefault()
              setCnpj(e.target.value)

            }}/>
             <Input name="Localização" placeholder="Localização" onChange={(e) => {
              e.preventDefault()
              setLocale(e.target.value)
            }}/>
          </Form>     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={async() => {
            add({
              locale,
              cnpj,
              name,
            })
            getEstablishments()

            handleClose()
          }}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const AddCompany: React.FC = () => {
  const {getEstablishments, removeEstablishment, establishments} = useEstablishment()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  useEffect(() => {
    async function get() {
      const e = await getEstablishments()
    }
    get()
  }, [])
  console.log('oiii', establishments)
  return  (
    <Container>
      <Content>
      <Header>
        <h1 style={{ color: '#472C50'}}> Adicionar Estabelecimentos</h1>
        <IoIosAddCircle size={60} color={'#9C67DF'}  onClick={()  => setShow(!show)}/>
      </Header>
          {establishments.length > 0 && establishments.map(e=> {
            return (
            <Frame>
                     <span style={{margin: '20px', color: '#A6A4A4'}}>{e.name}</span>
                     <span style={{margin: '20px', color: '#A6A4A4'}}>{e.cnpj}</span>
                    <span style={{margin: '20px', color: '#A6A4A4'}}>{e.locale}</span>
                    <FaTrash size={20} color={'#9C67DF'} style={{margin: '20px'}}
                    onClick={()=>{ 
                      if(e.id) {
                      removeEstablishment(e.id)
                      getEstablishments()
                    }}}/>
            </Frame>
            )
          })}
          
        
      </Content>
     {show && <ModalFactory show={show} handleClose={handleClose} handleShow={handleShow}/> }

    </Container>
  ) 
}
export default AddCompany
