export const ModalConfirmation = ({data, event})=>{
    return(
        <div>
            {event.target.dataset.text === 'update'} ?
            <i className="bi bi-check-circle"></i>
            <h3>Usuario {data.email} editado </h3>
            :
            <h3>Usuario {data.email} eliminado con éxito</h3> 
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