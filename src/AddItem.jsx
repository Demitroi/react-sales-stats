import { useState } from 'react'

const AddItem = ({ onAddItem }) => {

    const [name, setName] = useState('');

    return (
        <div className="flex-container">
            <input type="text"
                   placeholder="Add Item"
                   value={name}
                   onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                    setName('');
                    onAddItem(name);
                }}>
                Add
            </button>
        </div>
    )
}

export default AddItem
