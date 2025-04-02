const ItemStats = ({ totalItems, totalSales, mostSoldItemName }) => {

    return (
        <>
            <div className="flex-container-between">
                <strong>Total Sales:</strong>
                <span>{totalSales}</span>
            </div>
            <div className="flex-container-between">
                <strong>Total Items:</strong>
                <span>{totalItems}</span>
            </div>
            <div className="flex-container-between">
                <strong>Most Sold Item:</strong>
                <span>{mostSoldItemName}</span>
            </div>
        </>
    );
};

export default ItemStats;
