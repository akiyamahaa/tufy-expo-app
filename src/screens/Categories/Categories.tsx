import CreateSearchBar from "components/CreateSearchBar/CreateSearchBar";
import { useState } from "react";
import { Text, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import NewCategory from "components/NewCategory/NewCategory";
import Layout from "components/Layout";
import Container from "components/Container";

interface Props {}

const CategoriesScreen = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const searh = () => {};

  return (
    <Layout back={true}>
      <NewCategory setShowModal={setShowModal} showModal={showModal} />
      <Container>
        <CreateSearchBar search={searh} setShowModal={setShowModal} />
      </Container>
    </Layout>
  );
};
const styles = StyleSheet.create({});
export default CategoriesScreen;
