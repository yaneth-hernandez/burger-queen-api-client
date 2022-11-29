import { useState } from "react"


export const ItemTable = ({children,isOpen, id, email, role})=>{
const [userEdit, setUserEdit] = useState(null)

const dataUser={
    id:id,
    email:email,
    role:role,
}
console.log(dataUser)
 const handleOnclick = (e)=>{
    isOpen()
    console.log(e.target.dataset)
 }
 
    return (
        <>
        <article className="item-table">{id}</article>
          <article className="item-table">{email}</article>
          {/* <article className="item-table">******</article>  */}
          <article className="item-table">{role}</article>
          <article className="item-table"><button className="selection" onClick={(e)=>handleOnclick(e)}><i className="bi bi-three-dots-vertical" data-id={id} data-email={email} data-role={role}></i></button></article>
{children}
         </>
    )
}