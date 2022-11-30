import { Modal } from '../../pages/Modal/Modal'
import { ModalCreate } from "../ContentModal/ModalCreate.jsx";
import { ModalEdit } from "../ContentModal/ModalEdit.jsx";
import { ModalSelection } from '../ContentModal/ModalSelection';
import { ModalDelete } from '../ContentModal/ModalDelete';
import { useModal } from "../../helpers/modals/useModal.jsx";
import './AdminUser.scss'
// import { UserList } from '../UserList/UserList';
import { requestGetUser } from '../../helpers/API_request/userRequest'
import { useEffect, useState, createContext, useContext } from "react";
import { Table } from "../Table/Table";
import { ItemTable } from "../ItemTable/ItemTable";

//export const UserContext = createContext();

export const AdminUser = () => {
  const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false)
  const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(false)
  const [isOpenModalSelection, openModalSelection, closeModalSelection] = useModal(false)
  const [isOpenModalDelete, openModalDelete, closeModalDelete] = useModal(false)
    

  const [dataUser, setDataUser] = useState([])
  //const [userEdit, setUserEdit] = useState(null)
  const token = localStorage.getItem('Token')


  //const getUserList = ()=>{
    const addUser = (user)=>{
      setDataUser((prevState) => [...prevState, user])
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
  //}

  //useEffect(() => { getUserList() } , [])

  return (
    <>
      <section className="btnContainerCreate" >
        <button type="button" className="btnCreate" onClick={openModalCreate}>Crear usuario <i className="bi bi-plus-circle"></i></button>
      </section>
      {/* <UserContext.Provider value={edit}> */}

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
            //isOpen={openModalSelection}
            >

              {/* <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
                <ModalEdit />
              </Modal> */}


            </ItemTable>

          ))
        }
      </Table>
      {/*</UserContext.Provider>*/}
      {/* <UserList isOpen={openModalSelection}/> */}
      <Modal isOpen={isOpenModalCreate} closeModal={closeModalCreate}>
        <ModalCreate closeModal={closeModalCreate} onAddUser={addUser}/>
      </Modal>
      {/* <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
        <ModalEdit />
      </Modal> */}
      {/* <Modal isOpen={isOpenModalDelete} closeModal={closeModalDelete}>
                <ModalDelete />
            </Modal> */}
      
      {/* <Modal isOpen={isOpenModalSelection} closeModal={closeModalSelection}>
        <ModalSelection isOpen={openModalEdit} closeModal={closeModalSelection} />
      </Modal> */}
    </>
  )
}
//isOpen={openModalEdit} closeModal={closeModalSelection}