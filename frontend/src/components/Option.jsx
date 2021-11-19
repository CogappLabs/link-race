import React from 'react';
// Components
import Modal from './Modal';

const Option = () => (
    <div className="option">
        <button>Click me to see info about the object</button>

        {/* Modal with info about the object */}
        <Modal>
            <div>I am the info about the object</div>
        </Modal>
    </div>
)

export default Option