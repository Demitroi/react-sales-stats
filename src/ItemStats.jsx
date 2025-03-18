const ItemStats = ({ totalItems, totalSales, mostSoldItemName }) => {

    return (
        <>
            <div className="flex-container">
              <strong>Total Sales:</strong>
              <span>{totalSales}</span>
            </div>
            <div className="flex-container">
              <strong>Total Items:</strong>
              <span>{totalItems}</span>
            </div>
            <div className="flex-container">
              <strong>Most Sold Item:</strong>
              <span>{mostSoldItemName}</span>
            </div>
        </>
    )
}

export default ItemStats
