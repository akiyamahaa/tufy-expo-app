import { EvilIcons } from "@expo/vector-icons";
import { Icon, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import SearchField from "./SearchField";

interface Props {
  search: (text: string) => void;
  setShowModal?: (modal: boolean) => void;
  onCreatePress?: () => void;
  refresh?: () => void;
}

const CreateSearchBar = (props: Props) => {
  const { search, setShowModal, onCreatePress, refresh } = props;
  return (
    <View style={styles.root}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          if (setShowModal) {
            setShowModal(true);
          } else {
            onCreatePress && onCreatePress();
          }
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Tạo mới</Text>
      </TouchableOpacity>
      <SearchField widthFull={false} onPress={search} />
      {refresh && (
        <TouchableOpacity style={styles.buttonRefresh} onPress={refresh}>
          <Icon
            as={<EvilIcons name="refresh" size={24} color="black" />}
            size={5}
            ml="2"
            color="#000"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonRefresh: {
    marginLeft: 4,

    backgroundColor: "#fff",
    paddingRight: 6,
    paddingVertical: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  root: {
    marginTop: 38,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    width: Dimensions.get("screen").width * 0.3,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
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
export default CreateSearchBar;
