import { useRoute } from "@react-navigation/core";
import Container from "components/Container";
import CreateSearchBar from "components/CreateSearchBar/CreateSearchBar";
import Layout from "components/Layout";
import NewProduct from "components/NewProduct/NewProduct";
import ProductList from "components/ProductList/ProductList";
import React, { useState } from "react";

interface Props {}

const ProductScreen = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRoute();
  const { id } = router.params as any;
  const searh = () => {};

  return (
    <Layout back>
      <Container>
        <CreateSearchBar search={searh} setShowModal={setShowModal} />
        <ProductList id={id} setShowModal={setShowModal} showModal={showModal} />
      </Container>
    </Layout>
  );
};

export default ProductScreen;
