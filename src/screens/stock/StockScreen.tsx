import Container from 'components/Container';
import CreateSearchBar from 'components/CreateSearchBar/CreateSearchBar';
import Layout from 'components/Layout';
import React, { useState } from 'react';
import SearchStockDialog from './components/SearchStockDialog';
import StockInList from './components/StockInList';
import StockOutList from './components/StockOutList';

interface Props {}

const StockScreen = (props: Props) => {
  const [active, setActive] = useState(true);
  const [showSearchModal, setShowSearchModal] = useState(false);

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
        <CreateSearchBar search={() => setShowSearchModal(true)} />
        {active ? <StockInList /> : <StockOutList />}
      </Container>
    </Layout>
  );
};

export default StockScreen;
