export const ModalConfirmCreate = ({newUser})=>{
    return(
        <div className="modalConfirm">
           <i className="bi bi-check-circle"></i>
            <h3>Id: {newUser.id}</h3>
            <h3>Correo: {newUser.email}</h3>
            <h4>Creado con exito! </h4>
        </div>
    )
}


// const validateData=(event, data)=>{
//     if(data === 'Email format is invalid'){
//         console.log('Formato de email inválido')
//     }else if(event.target.dataset.text === 'update'){
//         //cierro modal editar
//         //abro modal con mensaje:
//        console.log(data.id, data.email, 'Editado con éxito')
//     }else if(event.target.dataset.text === 'delete'){
//       //cierro modal eliminar
//       //abro modal con mensaje:
//      console.log(data.id, data.email, 'Ha sido borrado')
//   }
//   }