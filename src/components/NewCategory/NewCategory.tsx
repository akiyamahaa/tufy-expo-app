import React from "react";
import { Button, Modal, FormControl, Input, Icon, Text } from "native-base";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  setShowModal: (modal: boolean) => void;
  showModal: boolean;
}
const NewCategory = (props: Props) => {
  const { setShowModal, showModal } = props;
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
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setShowModal(false)}
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
