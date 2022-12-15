import './Modal.scss'

export const Modal = ({ children, isOpen, closeModal}) => {

    const handleClick = () => {
        closeModal()
    }

    return (
        <article className={`modal ${isOpen && "is-open"}`}>
            <div className="modalContent">
                <button type="button" className="modalClose" onClick={handleClick}><i className="bi bi-x-circle"></i></button>
                {children}
            </div>
        </article>
    )
} 