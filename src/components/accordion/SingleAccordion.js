
import { useState } from 'react';
import './SingleAccordion.css';

const SingleAccordion = ({ title, text }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <div onClick={handleClick} className="container">
            <div className="title">{title}<span>+</span></div>
            {isActive ? <p>{text}</p> : null}
        </div>
    )
}

export default SingleAccordion;
