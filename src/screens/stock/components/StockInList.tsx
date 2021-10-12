import { Box } from 'native-base';
import React from 'react';
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

const StockInList = (props: Props) => {
  return (
    <Box>
      {dataMockup.map((item, index) => (
        <Box key={`${item}-${index}`}>
          <ProductCard data={item} />
        </Box>
      ))}
    </Box>
  );
};

export default StockInList;
