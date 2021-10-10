import React from "react";
import { Button, Modal, FormControl, Input, Icon, Text } from "native-base";
import { useState } from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  active: boolean;
  setShowModal: (modal: boolean) => void;
  showModal: boolean;
}
const NewCustomerSupplier = (props: Props) => {
  const { active, setShowModal, showModal } = props;
  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            {active ? "Tạo mới phân phối" : "Tạo mới khách hàng"}
          </Modal.Header>
          <Modal.Body>
            <FormControl mt="3">
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Tên khách hàng"
              />
            </FormControl>
            <FormControl mt="3">
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="contacts" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Số điện thoại"
              />
            </FormControl>
            <FormControl mt="3">
              <Input
                InputLeftElement={
                  <Icon
                    as={<FontAwesome name="address-card-o" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Địa chỉ"
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
export default NewCustomerSupplier;
