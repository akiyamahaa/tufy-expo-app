import React from "react";
import { Modal, FormControl, Input, Icon, Text } from "native-base";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { ICategories } from "utils/interfaces/categories.interface";

interface Props {
  setShowModal: (modal: boolean) => void;
  showModal: boolean;
  createNew: (value: ICategories) => void;
}
const NewCategory = (props: Props) => {
  const { setShowModal, showModal, createNew } = props;
  const [name, setName] = useState("");
  const handleSave = () => {
    if (name) {
      const newC = {
        name,
      };
      createNew(newC);
      setShowModal(false);
    }
  };
  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>{"Tạo mới loại sản phẩm"}</Modal.Header>
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
                placeholder="Tên loại sản phẩm"
                onChangeText={(text) => setName(text)}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={handleSave}
              style={styles.button}
            >
              <Text style={styles.text}>Lưu</Text>
            </TouchableOpacity>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
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
export default NewCategory;
