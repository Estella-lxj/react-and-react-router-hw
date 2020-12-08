import React from 'react';
import './ModalContent.css';

const ModalContent = ({ handleClose }) => {


    return (
        <div className='modal-container' onClick={handleClose}>
            <div className='modal' onClick={e => e.stopPropagation()}>
                <h3>Hello World!</h3>
                <div className='btn-group'>
                    <button onClick={handleClose}>Save</button>
                    <button onClick={handleClose}>Cancel</button>
                </div>
                <button className="cross" onClick={handleClose}>X</button>
            </div>
        </div>
    )
}

export default ModalContent;