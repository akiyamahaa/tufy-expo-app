import { View } from "native-base";
import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

interface Props {
  back?: boolean;
  children?: any
}

const Layout = (props: Props) => {
  const { back, children } = props;
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image
          style={styles.imgHeader}
          source={require("../../assets/background/header.png")}
        />
        <View style={styles.logo}>
          {back && (
            <TouchableOpacity onPress={handleBack}>
              <Ionicons
                name="arrow-back-circle-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          )}
          <View style={styles.logoContainer}>
            <Text style={styles.headingText}>TUFY</Text>
            <Text style={styles.description}>Inventory Management</Text>
          </View>
        </View>
      </View>
      <View style={styles.children}>
        {children}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#5200FF",
    display: "flex",
    flex: 1,
  },
  container: {
    zIndex: 0,
    position: "relative",
  },
  imgHeader: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.36,
    zIndex: 0,
  },
  logo: {
    position: "absolute",
    top: 20,
    left: 20,
    display: "flex",
    flexDirection: "row",
  },
  logoContainer: {
    marginLeft: 10
  },
  headingText: {
    color: '#ED0000',
    fontWeight: '700',
    fontSize: 15,
    fontFamily: "Roboto",
  },
  description: {
    color: '#9D9D9D',
    fontWeight: '700',
    fontSize: 12,
    fontFamily: "Roboto",
    fontStyle: 'italic'
  },
  children: {
    marginTop: -Dimensions.get("screen").height * 0.275,
    height: '100%'
  }
});
export default Layout;