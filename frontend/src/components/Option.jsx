import React from 'react';
// Components
import Modal from './Modal';

const Option = ({ optionUrl }) => (
    <div className="option">
        {/* TODO: This to be an image? */}
        <button>{optionUrl}</button>

        {/* Modal with info about the object */}
        <Modal>
            <div>I am the info about the object</div>
        </Modal>
    </div>
)

export default Option