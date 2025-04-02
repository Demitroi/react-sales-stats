import './App.css';
import Item from './Item.jsx';
import AddItem from './AddItem.jsx';
import ItemStats from './ItemStats.jsx';
import useSales from './hooks/useSales.jsx';
import initialSales from './mocks/initialSales.js';


const App = () => {
    const { sales, totalItems, totalSales, mostSoldItem, addSale, updateSale, deleteSale } = useSales({ initialSales });

    const handleAddSale = (name) => addSale(name);

    const handleChangeSale = (saleUpdated) => updateSale(saleUpdated);

    const handleDeleteSale = (saleID) => deleteSale(saleID);

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
