import { useNavigation } from '@react-navigation/core';
import Container from 'components/Container';
import Layout from 'components/Layout';
import React, { useState } from 'react';
import StockInList from './components/StockInList';
import StockOutList from './components/StockOutList';

interface Props {}

const StockScreen = (props: Props) => {
  const navigation = useNavigation<any>();

  const [active, setActive] = useState(true);

  return (
    <Layout back={true}>
      <Container
        button={true}
        textFirstButton="Nhập hàng"
        textSecondButton="Bán hàng"
        active={active}
        onPress={setActive}
      >
        {active ? (
          <StockInList active={active} />
        ) : (
          <StockOutList active={active} />
        )}
      </Container>
    </Layout>
  );
};

export default StockScreen;
