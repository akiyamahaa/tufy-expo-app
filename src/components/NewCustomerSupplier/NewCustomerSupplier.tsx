import React from "react";
import { Button, Modal, FormControl, Input, Icon, Text } from "native-base";
import { useState } from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { ICustomer } from "utils/interfaces/customers.interface";
import { IDistributor } from "utils/interfaces/distributors.interface";

interface Props {
  active: boolean;
  setShowModal: (modal: boolean) => void;
  showModal: boolean;
  createNew: (value: ICustomer | IDistributor) => void;
}
const NewCustomerSupplier = (props: Props) => {
  const { active, setShowModal, showModal, createNew } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const disabledCondition = !name || !phone || !address;
  const handleSave = () => {
    if (!disabledCondition) {
      const newCD = {
        name,
        phone,
        address,
      };
      createNew(newCD);
      setShowModal(false);
    }
  };
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
                placeholder={"Tên " + (active ? "phân phối" : "khách hàng")}
                onChangeText={(text) => setName(text)}
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
                onChangeText={(text) => setPhone(text)}
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
                onChangeText={(text) => setAddress(text)}
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
                style={[styles.text, disabledCondition && { color: "#c2c2d6" }]}
              >
                Lưu
              </Text>
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
