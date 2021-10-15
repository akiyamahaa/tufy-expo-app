import { useNavigation } from '@react-navigation/core';
import CreateSearchBar from 'components/CreateSearchBar/CreateSearchBar';
import { Box } from 'native-base';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllStockIn } from 'redux/action/stock.actions';
import ProductCard from './ProductCard';
import SearchStockInDialog from './SearchStockInDialog';

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

const StockInList = (props: any) => {
  const { active } = props;

  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const [stockList, setStockList] = useState<any>([]);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const navigateCreateStockIn = () => {
    navigation.navigate('CreateStockIn');
  };

  const loadStock = async () => {
    const resultStockIn = await getAllStockIn(dispatch);
    setStockList(resultStockIn.stockIn);
  };
  useEffect(() => {
    loadStock();
  }, []);

  const refreshList = () => {
    loadStock();
  };

  return (
    <Box>
      <SearchStockInDialog
        showModal={showSearchModal}
        setShowModal={setShowSearchModal}
        setStockList={setStockList}
      />
      <CreateSearchBar
        onCreatePress={navigateCreateStockIn}
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

export default StockInList;
