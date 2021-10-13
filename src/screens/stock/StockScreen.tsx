import { useNavigation } from '@react-navigation/core';
import Container from 'components/Container';
import CreateSearchBar from 'components/CreateSearchBar/CreateSearchBar';
import Layout from 'components/Layout';
import React, { useState } from 'react';
import SearchStockDialog from './components/SearchStockDialog';
import StockInList from './components/StockInList';
import StockOutList from './components/StockOutList';

interface Props {}

const StockScreen = (props: Props) => {
  const navigation = useNavigation<any>();
  const [showModal, setShowModal] = useState(false);

  const [active, setActive] = useState(true);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const navigateCreateStock = () => {
    navigation.navigate('CreateStock');
  };

  return (
    <Layout back={true}>
      <SearchStockDialog
        showModal={showSearchModal}
        setShowModal={setShowSearchModal}
      />
      <Container
        button={true}
        textFirstButton="Nhập hàng"
        textSecondButton="Bán hàng"
        active={active}
        onPress={setActive}
      >
        <CreateSearchBar
          onCreatePress={navigateCreateStock}
          search={() => setShowSearchModal(true)}
        />
        {active ? <StockInList /> : <StockOutList />}
      </Container>
    </Layout>
  );
};

export default StockScreen;
