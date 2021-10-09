import Container from 'components/Container';
import Layout from 'components/Layout';
import { Text, Box } from 'native-base';
import React, { useState } from 'react';

interface Props {}

const CustomerSupplierScreen = (props: Props) => {
  const [active, setActive] = useState(true);
  
  return (
    <Layout back={true}>
      <Container button={true} textFirstButton='Phân phối' textSecondButton='Khách hàng' active={active} onPress={setActive}>
     
      </Container>
    </Layout>
  );
};

export default CustomerSupplierScreen;
