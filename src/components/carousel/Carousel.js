import { useState } from 'react';
import Card from './Card';
import Dots from './Dots';

const Carousel = () => {
    const data = [
        { id: 0, title: "A", text: "aaa" },
        { id: 1, title: "B", text: "bbb" },
        { id: 2, title: "C", text: "ccc" },
    ]

    const [index, setIndex] = useState(0);

    return (
        <div>
            <Card data={data} index={index} setIndex={setIndex} />
            <Dots index={index} />
        </div>
    )
}

export default Carousel;