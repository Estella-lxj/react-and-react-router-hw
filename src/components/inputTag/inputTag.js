import React, { useState } from 'react';
import './InputTag.css';

const InputTag = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

    const handleTag = (e) => {
        e.preventDefault();
        if (!input.length) return;
        for (let tag of list) {
            if (tag.content === input) return;
        }
        setList([...list, { 'id': new Date().getTime(), 'content': input }]);
        setInput('');
    };

    const handleDelete = (id) => {
        setList(list.filter((tag) => tag.id !== id))
    }

    console.log(list)

    return (
        <div className='input-tag-container'>

            {list.map(({ id, content }) =>
                <div key={id} className='tag'>
                    {content}
                    <button className='delete-btn' onClick={() => handleDelete(id)}>x</button>
                </div>

            )}

            <form onSubmit={handleTag}>
                <input
                    className='input'
                    type='text'
                    placeholder='Add a tag...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
            </form>
        </div>
    )

}

export default InputTag;