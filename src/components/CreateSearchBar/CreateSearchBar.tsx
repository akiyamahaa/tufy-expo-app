import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import SearchField from "./SearchField";

interface Props {
  search: (text: string) => void;
}

const CreateSearchBar = (props: Props) => {
  const { search } = props;
  return (
    <View style={styles.root}>
      <TouchableOpacity
        activeOpacity={0.6}
        // onPress={() => onPress(true)}
        style={styles.button}
      >
        <Text style={styles.text}>Tạo mới</Text>
      </TouchableOpacity>
      <SearchField widthFull={false} onPress={search} />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    marginTop: 38,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    width: Dimensions.get("screen").width * 0.4,
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
