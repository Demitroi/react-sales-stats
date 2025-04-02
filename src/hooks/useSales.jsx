import { useRef, useState } from "react";
import { useEffect } from "react";

const useSales = ({ initialSales }) => {
    const [sales, setSales] = useState(initialSales);
    const [totalItems, setTotalItems] = useState(initialSales.length);
    const [totalSales, setTotalSales] = useState(0);
    const [mostSoldItem, setMostSoldItem] = useState(0);
    let nextID = useRef(initialSales.length);

    const addSale = (name) => {
        const newSales = [
            ...sales,
            { id: nextID.current++, name: name, sales: 0 }
        ];
        setSales(newSales);
    };

    const updateSale = (saleUpdated) => {
        const newSales = sales.map(sale => {
            if (sale.id === saleUpdated.id) {
                return saleUpdated;
            } else {
                return sale;
            }
        });
        setSales(newSales);
    };

    const deleteSale = (saleID) => {
        const newSales = sales.filter(sale => sale.id !== saleID);
        setSales(newSales);
    };

    useEffect(() => {
        setTotalItems(sales.length);
        setTotalSales(sales.reduce((acumulator, sale) => acumulator + sale.sales, 0));
        setMostSoldItem(sales.reduce((max, sale) => sale.sales > max.sales ? sale : max, sales[0]));
    }, [sales]);

    return { sales, totalItems, totalSales, mostSoldItem, addSale, updateSale, deleteSale };
};

export default useSales;
