import { useState } from 'react';

const ToDoList = () => {
    const [todo, setToDo] = useState('');
    const [list, setList] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        const newTodo = { id: Date.now(), text: todo };
        setList(prev => [...prev, newTodo])
        setToDo('')
    }

    const handleDelete = id => {
        setList(prev => prev.filter(item => item.id !== id))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={e => setToDo(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {list.map(item => (
                    <li key={item.id}>{item.text}
                        <button onClick={() => handleDelete(item.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;