import { useState } from "react";

const Item = ({ id, name, sales, onChageSale, onDeleteSale }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [nameEdit, setNameEdit] = useState('');

    const numberOfSales = `Sales: ${sales}`;

    const onClickAdd = () => {
        const sale = { id: id, name: name, sales: sales + 1 };
        onChageSale(sale);
    };

    const onClickSub = () => {
        const sale = { id: id, name: name, sales: sales - 1 };
        onChageSale(sale);
    };

    const onClickDel = () => {
        onDeleteSale(id);
    };

    const onClickEdit = () => {
        setIsEditing(true);
    };

    const onClickSave = () => {
        const sale = { id: id, name: nameEdit, sales: sales };
        setIsEditing(false);
        onChageSale(sale);
    };

    const onClickCancel = () => {
        setIsEditing(false);
    };


    if (!isEditing) {
        return (
            <>
                <div className="flex-container-between">
                    <span>{name}</span>
                    <span>{numberOfSales}</span>
                </div>
                <div className="flex-container">
                    <button onClick={onClickAdd}>Add</button>
                    <button onClick={onClickSub}>Sub</button>
                    <button onClick={onClickDel}>Del</button>
                    <button onClick={onClickEdit}>Edit</button>
                </div>
            </>
        );
    } else {
        return (
            <div className="flex-container">
                <input type="text"
                    value={nameEdit}
                    onChange={e => setNameEdit(e.target.value)} />
                <button onClick={onClickSave}>Save</button>
                <button onClick={onClickCancel}>Cancel</button>
            </div>
        );
    }

};

export default Item;
