import { Text, View } from "native-base";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { ICustomer } from "utils/interfaces/customers.interface";
import { IDistributor } from "utils/interfaces/distributors.interface";

interface Props {
  customer: ICustomer | IDistributor;
}

const CustomerCard = (props: Props) => {
  const { customer } = props;
  const displayAddress = () => {
    if (customer.address?.length > 24) {
      return customer.address.substring(0, 24) + " ...";
    }
    return customer.address;
  };
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.customerName}>{customer.name}</Text>
        <Text style={styles.customerAddress}>{'Địa chỉ: ' + displayAddress()}</Text>
      </View>
      <Text style={styles.customerPhone}>{customer.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
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
    paddingHorizontal: 20,
  },
  customerName: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 14,
    color: "#240046",
  },
  customerAddress: {
    fontFamily: "Roboto",
    fontWeight: "400",
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

export default CustomerCard;
