
export const TableProducts = ({children})=>{

    return(
      <>
        <section className="container-table-products">
          <h4 className="table-title">Lista de productos</h4>
          <article className="table-header">Id</article>
          <article className="table-header">Imágen</article>
          <article className="table-header">Nombre</article>
          <article className="table-header">Precio</article>
          <article className="table-header">Menú</article>
          <article className="table-header">Acciones</article>
        {children}
      </section>
</>
    )
}