import './Modal.scss'

export const Modal = ({children, isOpen, closeModal})=>{
    return(
        <article className={`modal ${isOpen && "is-open"}`}>
            <div className="modalContent">
                <button type="button" className="modalClose" onClick={closeModal}><i className="bi bi-x-circle"></i></button>

                {children}
            </div>
        </article>
    )
} 