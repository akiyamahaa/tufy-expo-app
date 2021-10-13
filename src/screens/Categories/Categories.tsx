import CreateSearchBar from "components/CreateSearchBar/CreateSearchBar";
import { useState } from "react";
import React from "react";
import { StyleSheet } from "react-native";
import Layout from "components/Layout";
import Container from "components/Container";
import CategoriesList from "components/CategoriesList/CategoriesList";

interface Props {}

const CategoriesScreen = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const searh = () => {};

  return (
    <Layout back={true}>
      <Container>
        <CreateSearchBar search={searh} setShowModal={setShowModal} refresh={() => null} />
        <CategoriesList showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </Layout>
  );
};
const styles = StyleSheet.create({});
export default CategoriesScreen;
