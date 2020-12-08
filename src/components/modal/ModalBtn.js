import React, { useState } from 'react';
import ModalContent from './ModalContent';

const ModalBtn = () => {
    const [opened, setOpened] = useState(false);

    const handleOpen = () => {
        setOpened(true)
    }

    const handleClose = () => {
        setOpened(false)
    }

    return (
        <div>
            <button onClick={handleOpen}>Open modal</button>
            {opened ? <ModalContent handleClose={handleClose} /> : null}
        </div>
    )
}

export default ModalBtn;