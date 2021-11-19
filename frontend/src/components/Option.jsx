import React from 'react';
// Components
import Modal from './Modal';

const Option = ({ optionUrl, toggleModal, showModal, optionMetadata }) => {
    console.log("option metadata", optionMetadata)

    return (
        <div className="option">
            {/* TODO: This to be an image? */}
            <button onClick={toggleModal}>{optionUrl}</button>

            {/* Modal with info about the object */}
            {showModal && (
                <Modal>
                    <div>I am the info about the object</div>
                </Modal>
            )}
        </div>
    )
}

export default Option