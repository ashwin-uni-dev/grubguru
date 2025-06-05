const Modal = ({ closeModal, children }: any) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
        >
            <div onClick={(e) => e.stopPropagation()}>
                { children }
            </div>
        </div>
    )
}

export default Modal;