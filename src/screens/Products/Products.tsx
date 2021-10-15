import { useRoute } from "@react-navigation/core";
import Container from "components/Container";
import Layout from "components/Layout";
import ProductList from "components/ProductList/ProductList";
import React, { useState } from "react";

interface Props {}

const ProductScreen = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRoute();
  const { id } = router.params as any;
  return (
    <Layout back>
      <Container>
        <ProductList
          id={id}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      </Container>
    </Layout>
  );
};

export default ProductScreen;
