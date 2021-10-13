import Container from "components/Container";
import CreateSearchBar from "components/CreateSearchBar/CreateSearchBar";
import CustomerList from "components/CustomerList/CustomerList";
import DistributorList from "components/DistributorList/DistributorList";
import Layout from "components/Layout";
import NewCustomerSupplier from "components/NewCustomerSupplier/NewCustomerSupplier";
import React, { useState } from "react";

interface Props {}

const CustomerSupplierScreen = (props: Props) => {
  const [active, setActive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout back={true}>
      
      <Container
        button={true}
        textFirstButton="Phân phối"
        textSecondButton="Khách hàng"
        active={active}
        onPress={setActive}
      >
        {active ? 
        <DistributorList showModal={showModal} setShowModal={setShowModal}/> 
        : <CustomerList showModal={showModal} setShowModal={setShowModal} />}
      </Container>
    </Layout>
  );
};

export default CustomerSupplierScreen;
