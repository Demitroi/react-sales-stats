import './App.css';
import Item from './Item.jsx';
import AddItem from './AddItem.jsx';
import ItemStats from './ItemStats.jsx';
import useSales from './hooks/useSales.jsx';
import initialSales from './mocks/initialSales.js';

let nextID = initialSales.length;

const App = () => {
    const { sales, totalItems, totalSales, mostSoldItem, updateSales } = useSales({ initialSales });

    const handleAddSale = (name) => {
        const newSales = [
            ...sales,
            { id: nextID++, name: name, sales: 0 }
        ];
        updateSales(newSales);
    };

    const handleChangeSale = (nextSale) => {
        const newSales = sales.map(sale => {
            if (sale.id === nextSale.id) {
                return nextSale;
            } else {
                return sale;
            }
        });
        updateSales(newSales);
    };

    const handleDeleteSale = (saleID) => {
        const newSales = sales.filter(sale => sale.id !== saleID);
        updateSales(newSales);
    };

    return (
        <>
            <header>
                <AddItem onAddItem={handleAddSale} />
            </header>

            <hr />

            <main>
                {sales.map(({ id, name, sales }) => (
                    <Item key={id}
                        id={id}
                        name={name}
                        sales={sales}
                        onChageSale={handleChangeSale}
                        onDeleteSale={handleDeleteSale} />
                ))}

                <hr />

                <ItemStats totalItems={totalItems}
                    totalSales={totalSales}
                    mostSoldItemName={mostSoldItem.name} />
            </main>
        </>
    );
};

export default App;
