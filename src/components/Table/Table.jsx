
export const Table = ({ children }) => {

  return (
    <>
      <h4 className="table-title">Lista de usuarios</h4>
      <aside className="container-table">
        <div className="table-header">Id</div>
        <div className="table-header">Correo</div>
        <div className="table-header">Perfil</div>
        <div className="table-header">Acciones</div>
        {children}
      </aside>
    </>
  )
}