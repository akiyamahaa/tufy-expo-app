import { ScrollView, Text, View } from "native-base";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  button?: boolean;
  textFirstButton?: string;
  textSecondButton?: string;
  children?: any;
  active?: boolean;
  onPress?: (press: boolean) => void;
}

const Container = (props: Props) => {
  const {
    button,
    textFirstButton,
    textSecondButton,
    children,
    active,
    onPress,
  } = props;
  return (
    <View style={styles.root}>
      {button && onPress && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => onPress(true)}
            style={[
              styles.button,
              active
                ? { backgroundColor: "#F7EFFF" }
                : { backgroundColor: "#fff" },
            ]}
          >
            <Text style={styles.text}>{textFirstButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => onPress(false)}
            style={[
              styles.button,
              !active
                ? { backgroundColor: "#F7EFFF" }
                : { backgroundColor: "#fff" },
            ]}
          >
            <Text style={styles.text}>{textSecondButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.children}>
        <View style={styles.childrenContainer}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    position: "relative",
    flex: 1,
  },
  buttonContainer: {
    zIndex: 9999,
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    width: Dimensions.get("screen").width * 0.36,
    paddingVertical: 6,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    margin: 2,
  },
  text: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 15,
    color: "#240046",
  },
  children: {
    marginTop: 22,
    flex: 1,
    backgroundColor: "#F7EFFF",
    borderRadius: 50,
  },
  childrenContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
});

export default Container;
