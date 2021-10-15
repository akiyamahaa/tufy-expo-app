import { Box } from 'native-base';
import React, { useState, useEffect } from 'react';
import { getAllStockOut } from 'redux/action/stock.actions';
import { useDispatch } from 'react-redux';

import ProductCard from './ProductCard';
import { useNavigation } from '@react-navigation/core';
import CreateSearchBar from 'components/CreateSearchBar/CreateSearchBar';
import SearchStockOutDialog from './SearchStockOutDialog';

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
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const [stockList, setStockList] = useState<any>([]);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const navigateCreateStockOut = () => {
    navigation.navigate('CreateStockOut');
  };
  const loadStock = async () => {
    const resultStockOut = await getAllStockOut(dispatch);
    setStockList(resultStockOut.stockOut);
  };
  useEffect(() => {
    loadStock();
  }, []);

  const refreshList = () => {
    loadStock();
  };

  return (
    <Box>
      <SearchStockOutDialog
        showModal={showSearchModal}
        setShowModal={setShowSearchModal}
        setStockList={setStockList}
      />
      <CreateSearchBar
        onCreatePress={navigateCreateStockOut}
        search={() => setShowSearchModal(true)}
        refresh={refreshList}
      />
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
