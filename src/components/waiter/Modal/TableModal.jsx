import './ModalStyle.scss'

export const TableModal = ({children})=>{
    return(
        <div className="tableContainer">
        <h4 className='tableModal'>Cant.</h4>
        <h4 className='tableModal'>Productos</h4>
        <h4 className='tableModalPrice'>Precio</h4>
        {children}
        </div>
    )
} 