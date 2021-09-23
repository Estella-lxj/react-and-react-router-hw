import { useState } from 'react';

const PollWidget = () => {
    const initialList = [
        { id: 1, option: "option 1", likes: 0 },
        { id: 2, option: "option 2", likes: 0 },
        { id: 3, option: "option 3", likes: 0 }
    ]

    const [list, setList] = useState(initialList);

    const handleLike = id => {
        setList(prev => prev.map(item => {
            if (item.id !== id) return item;
            else return {
                ...item,
                likes: item.likes + 1
            }
        }))
    }

    return (
        <div>
            <ul>
                {list.map(item => (
                    <li key={item.id}>{item.option}
                        <button onClick={() => handleLike(item.id)}>Like {item.likes}</button>
                    </li>

                ))}
            </ul>
        </div>
    )
}
export default PollWidget;