import React from 'react';

// Close modal (might need to move elsewhere)
const closeModal = () => {

}

const Modal = ({ children }) => (
    <div className="modal">
        {/* Close button */}
        <button onClick={closeModal}>Close me</button>

        {/* Modal content */}
        {children}
    </div>
)

export default Modal