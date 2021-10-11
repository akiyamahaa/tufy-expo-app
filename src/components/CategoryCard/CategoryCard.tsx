import { useNavigation } from "@react-navigation/core";
import { Text, View } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ICategoryWithCount } from "utils/interfaces/categories.interface";

interface Props {
  category: ICategoryWithCount;
}

const CategoryCard = (props: Props) => {
  const { category } = props;
  const navigation = useNavigation();
  const handleClick = (id: number) => {
    navigation.navigate(
      "ProductList" as never,
      {
        id,
      } as never
    );
  };
  const displayName = () => {
    if (category.name?.length > 24) {
      return category.name.substring(0, 24) + " ...";
    }
    return category.name;
  };
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => category.id && handleClick(category.id)}
    >
      <View>
        <Text style={styles.customerName}>{displayName()}</Text>
      </View>
      <Text style={styles.customerPhone}>{category.count + ' sp'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    padding: 14,
    backgroundColor: "#fff",
    marginVertical: 4,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 34,
  },
  customerName: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 14,
    color: "#240046",
  },
  customerPhone: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 14,
    color: "#240046",
  },
});

export default CategoryCard;
