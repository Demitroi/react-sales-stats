import { useState } from "react";
import { useEffect } from "react";

const useSales = ({ initialSales }) => {
    const [sales, setSales] = useState(initialSales);
    const [totalItems, setTotalItems] = useState(initialSales.length);
    const [totalSales, setTotalSales] = useState(0);
    const [mostSoldItem, setMostSoldItem] = useState(0);

    const updateSales = (sales) => {
        setSales(sales);
    };

    useEffect(() => {
        setTotalItems(sales.length);
        setTotalSales(sales.reduce((acumulator, sale) => acumulator + sale.sales, 0));
        setMostSoldItem(sales.reduce((max, sale) => sale.sales > max.sales ? sale : max, sales[0]));
    }, [sales]);

    return { sales, totalItems, totalSales, mostSoldItem, updateSales };
};

export default useSales;
