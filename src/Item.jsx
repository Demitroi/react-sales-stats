const Item = ({id, name, sales, onChageSale, onDeleteSale}) => {

    const numberOfSales = `Sales: ${sales}`;

    const onClickAdd = () => {
        const sale = {id: id, name: name, sales: sales + 1};
        onChageSale(sale);
    };

    const onClickSub = () => {
        const sale = {id: id, name: name, sales: sales - 1};
        onChageSale(sale);
    };

    const onClickDel = () => {
        onDeleteSale(id);
    };

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
            </div>
        </>
    );
};

export default Item;
