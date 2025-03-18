import { useState } from 'react'
import './App.css'
import Item from './Item.jsx'
import AddItem from './AddItem.jsx'
import ItemStats from './ItemStats.jsx'

const initialSales = [
    {id: 0, name: 'Mint', sales: 3},
    {id: 1, name: 'Mushroom', sales: 8},
    {id: 2, name: 'Potato', sales: 10},
    {id: 3, name: 'Capsicum', sales: 12},
    {id: 4, name: 'Cauliflower', sales: 7},
    {id: 5, name: 'Garlic', sales: 11},
    {id: 6, name: 'Ginger', sales: 1},
    {id: 7, name: 'Eggplant', sales: 15}
];

let nextID = initialSales.length;

const App = () => {
  const [sales, setSales] = useState(initialSales);
  const [totalItems, setTotalItems] = useState(initialSales.length);
  const [totalSales, setTotalSales] = useState(initialSales.reduce((acumulator, sale) => acumulator + sale.sales, 0));
  const [mostSoldItem, setMostSoldItem] = useState(initialSales.reduce((max, sale) => sale.sales > max.sales ? sale : max, initialSales[0]));

  const handleAddSale = (name) => {
      const newSales = [
          ...sales,
          {id: nextID++, name: name, sales: 0}
      ]
      setSales(newSales);
      setTotalItems(newSales.length);
      setTotalSales(newSales.reduce((acumulator, sale) => acumulator + sale.sales, 0));
  }

  const handleChangeSale = (nextSale) => {
      const newSales = sales.map(sale => {
          if (sale.id === nextSale.id) {
              return nextSale;
          } else {
              return sale;
          }
      })
      setSales(newSales)
      setTotalItems(newSales.length);
      setTotalSales(newSales.reduce((acumulator, sale) => acumulator + sale.sales, 0));
      setMostSoldItem(newSales.reduce((max, sale) => sale.sales > max.sales ? sale : max, newSales[0]))
  }

  const handleDeleteSake = (saleID) => {
      const newSales = sales.filter(sale => sale.id !== saleID);
      setSales(newSales)
      setTotalItems(newSales.length);
      setTotalSales(newSales.reduce((acumulator, sale) => acumulator + sale.sales, 0));
      setMostSoldItem(newSales.reduce((max, sale) => sale.sales > max.sales ? sale : max, newSales[0]))
  }

  return (
    <>
      <AddItem onAddItem={handleAddSale} />

      <hr/>

      {sales.map(({id, name, sales}) => (
          <Item key={id}
                id={id}
                name={name}
                sales={sales}
                onChageSale={handleChangeSale}
                onDeleteSale={handleDeleteSake}/>
      ))}

      <hr/>

      <ItemStats totalItems={totalItems}
                 totalSales={totalSales}
                 mostSoldItemName={mostSoldItem.name} />
    </>
  )
}

export default App
