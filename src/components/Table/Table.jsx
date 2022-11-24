
export const Table = ({children})=>{

    return(
        <section className="container-table">
          <h4 className="table-title">Lista de usuarios</h4>
          <article className="table-header">Id</article>
          <article className="table-header">Correo</article>
          <article className="table-header">Contraseña</article>
          <article className="table-header">Perfil</article>
          <article className="table-header">Acciones</article>
        {/* <ItemTable isOpen={openModalSelection}/> */}
        {children}
      </section>
    )
}