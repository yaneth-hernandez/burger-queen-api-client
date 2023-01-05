import { Modal } from '../../pages/Modal/Modal'
import { ModalCreate } from "../ContentModal/ModalCreate.jsx";
import { ModalConfirmCreate } from '../ContentModal/ModalConfirmCreate'
import { useModal } from "../../helpers/modals/useModal.jsx";
import './AdminUser.scss'
import { requestGetUser } from '../../helpers/API_request/userRequest'
import { useEffect, useState} from "react";
import { Table } from "../Table/Table";
import { ItemTable } from "../ItemTable/ItemTable";
import { HeaderAdmin } from '../HeaderAdmin/HeaderAdmin';

export const AdminUser = () => {
  const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false)
  const [isOpenModalConfirmation, openModalConfirmation, closeModalConfirmation] = useModal(false)
  const [dataUser, setDataUser] = useState([])
  const [newUser, setNewUser] = useState([])
  const token = localStorage.getItem('Token')
    const addUser = (user)=>{
      setDataUser((prevState) => [...prevState, user])
      setNewUser(user)
    }

  useEffect(() => {
      requestGetUser(token)
      .then(res => res.json())
      .then((res) => {
        setDataUser(res.map(user => {
          return {
            email: user.email,
            id: user.id,
            password: user.password,
            role: user.role,
          }
        }));
      })
      .catch((error) => {
        console.error(error)
      })
  }, []);
 
  return (
    <>
    <HeaderAdmin/>
      <section className="btnContainerCreate" >
        <button type="button" className="btnCreate" onClick={openModalCreate}>Crear usuario <i className="bi bi-plus-circle"></i></button>
      </section>

      <Table>
        {
          dataUser.map(user => (
            <ItemTable
              key={user.id}
              id={user.id}
              email={user.email}
              password={user.password}
              role={user.role}
              setDataUser={setDataUser}
              onAddUser={addUser}
            >
            </ItemTable>
          ))
        }
      </Table>
      <Modal isOpen={isOpenModalCreate} closeModal={closeModalCreate}>
        <ModalCreate closeModal={closeModalCreate} isOpen={openModalConfirmation} onAddUser={addUser}/>
      </Modal>
      <Modal isOpen={isOpenModalConfirmation} closeModal={closeModalConfirmation}>
        <ModalConfirmCreate closeModal={closeModalConfirmation} newItem={newUser}/>
      </Modal>
    </>
  )
}
//isOpen={openModalEdit} closeModal={closeModalSelection}