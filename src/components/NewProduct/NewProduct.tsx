import React from "react";
import { Button, Modal, FormControl, Input, Icon, Text } from "native-base";
import { useState } from "react";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { IProduct } from "utils/interfaces/products.interface";

interface Props {
  setShowModal: (modal: boolean) => void;
  showModal: boolean;
  product?: IProduct;
  createNew: (value: IProduct) => void;
  categories: string;
}
const NewProduct = (props: Props) => {
  const { setShowModal, showModal, product, createNew, categories } = props;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const disabledCondition = !name || !price || !purchasePrice;
  const handleSave = () => {
    if (!disabledCondition) {
      createNew({ name, price, purchasePrice, categoryId: +categories });
      setShowModal(false);
    }
  };
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>
          {(!product?.id ? "Tạo mới" : "Sửa") + " sản phẩm"}
        </Modal.Header>
        <Modal.Body>
          <FormControl mt="3">
            <Input
              InputLeftElement={
                <Icon
                  as={<Entypo name="pencil" size={24} color="black" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Tên sản phẩm"
              onChangeText={(text) => setName(text)}
            />
          </FormControl>
          {/* <FormControl mt="3">
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="warehouse" size={24} color="black" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Phân phối"
            />
          </FormControl> */}
          <FormControl mt="3">
            <Input
              keyboardType="number-pad"
              InputLeftElement={
                <Icon
                  as={<Ionicons name="pricetag" size={24} color="black" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Giá nhập"
              onChangeText={(text) => setPrice(+text)}
            />
          </FormControl>
          <FormControl mt="3">
            <Input
              keyboardType="number-pad"
              InputLeftElement={
                <Icon
                  as={<Entypo name="price-tag" size={24} color="black" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Giá bán"
              onChangeText={(text) => setPurchasePrice(+text)}
            />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <TouchableOpacity
            disabled={disabledCondition}
            activeOpacity={0.6}
            onPress={handleSave}
            style={styles.button}
          >
            <Text
              style={[styles.text, disabledCondition && { color: "#BABABA" }]}
            >
              Lưu
            </Text>
          </TouchableOpacity>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
const styles = StyleSheet.create({
  button: {
    width: Dimensions.get("screen").width * 0.2,
    paddingHorizontal: 5,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    marginRight: 4,
  },
  text: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 15,
    color: "#5200FF",
  },
});
export default NewProduct;
