import { Modal } from '../../pages/Modal/Modal'
import { ModalCreate } from "../ContentModal/ModalCreate.jsx";
import { ModalEdit } from "../ContentModal/ModalEdit.jsx";
import { ModalSelection } from '../ContentModal/ModalSelection';
import { useModal } from "../../helpers/modals/useModal.jsx";
import './AdminUser.scss'
// import { UserList } from '../UserList/UserList';
import { requestGetUser } from '../../helpers/API_request/userRequest'
import { useEffect, useState, createContext, useContext } from "react";
import { Table } from "../Table/Table";
import { ItemTable } from "../ItemTable/ItemTable";

//const UserContext = createContext();

export const AdminUser = () => {
  const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false)
  const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(false)
  const [isOpenModalSelection, openModalSelection, closeModalSelection] = useModal(false)

  const [dataUser, setDataUser] = useState([])
  const token = localStorage.getItem('Token')

  //const getUserList = ()=>{

  
  useEffect(() => {
    fetch('http://localhost:8080/users', {
      headers: { "Authorization": "Bearer " + token }
    })
  //    requestGetUser()
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
//}

//useEffect(() => { getUserList() } , [])

  return (
    <>
      <section>
        <button type="button" onClick={openModalCreate}>Crear usuario</button>
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
                isOpen={openModalSelection}
              />
             
            ))
          }
        </Table>
      
      {/* <UserList isOpen={openModalSelection}/> */}
      <Modal isOpen={isOpenModalCreate} closeModal={closeModalCreate}>
        <ModalCreate/>
      </Modal>
      <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
        <ModalEdit />
      </Modal>
      <Modal isOpen={isOpenModalSelection} closeModal={closeModalSelection}>
        <ModalSelection isOpen={openModalEdit} closeModal={closeModalSelection} />
      </Modal>
    </>
  )
}
//isOpen={openModalEdit} closeModal={closeModalSelection}