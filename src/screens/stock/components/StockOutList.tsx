import { Box } from 'native-base';
import React, { useState, useEffect } from 'react';
import { getAllStockOut } from 'redux/action/stock.actions';
import { useDispatch } from 'react-redux';

import ProductCard from './ProductCard';

interface Props {}

const dataMockup = [
  {
    date: '05/10/2021',
    distributor: 'Orion',
    price: 100000,
  },
  {
    date: '05/10/2021',
    distributor: 'Orion',
    price: 100000,
  },
  {
    date: '05/10/2021',
    distributor: 'Orion',
    price: 100000,
  },
  {
    date: '05/10/2021',
    distributor: 'Orion',
    price: 100000,
  },
  {
    date: '05/10/2021',
    distributor: 'Orion',
    price: 100000,
  },
];

const StockOutList = (props: any) => {
  const { active } = props;
  const dispatch = useDispatch();

  const [stockList, setStockList] = useState<any>([]);

  useEffect(() => {
    const loadStock = async () => {
      const resultStockOut = await getAllStockOut(dispatch);
      setStockList(resultStockOut.stockOut);
    };

    loadStock();
  }, []);
  return (
    <Box>
      {Boolean(stockList.length) &&
        stockList.map((item: any, index: any) => (
          <Box key={`${item}-${index}`}>
            <ProductCard data={item} active={active} />
          </Box>
        ))}
    </Box>
  );
};

export default StockOutList;
