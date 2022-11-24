
export const ItemTable = ({isOpen, id, email, role})=>{
    
    return (
        <>
        <article className="item-table">{id}</article>
          <article className="item-table">{email}</article>
          <article className="item-table">******</article> 
          <article className="item-table">{role}</article>
          <article className="item-table"><button onClick={isOpen}><i className="bi bi-three-dots-vertical" data-id={id}></i></button></article>
          
          </>
    )
}