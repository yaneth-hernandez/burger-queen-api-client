export const ModalEdit = () =>{
    return(
      <>
      <h3>Editar usuario</h3>
        <form className="contentModal_createUser">
          <label className="contentModal_label">Correo electrónico</label>
          <input type="text" placeholder="@corre" required/>
          <label className="contentModal_label">Contraseña</label>
          <input type="text" placeholder="contraseña" required/>
          <label className="contentModal_label">Perfil</label>
          <select>
            <option>---</option>
            <option>Admin</option>
            <option>Mesero</option>
            <option>Jefe de cocina</option>
          </select>
          <button type='button'>Finalizar</button>
          </form>
          </>
    )
}