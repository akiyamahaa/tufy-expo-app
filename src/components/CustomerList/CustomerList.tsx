import { useEffect, useState } from "react";
import { Text, View } from "native-base";
import React from "react";
import { ICustomer } from "utils/interfaces/customers.interface";
import CustomerCard from "components/CustomerCard/CustomerCard";
import { dataExample } from "./sampleData";

interface Props {}

const CustomerList = (props: Props) => {
  const [customers, setCustomers] = useState<ICustomer[]>([] as ICustomer[]);
  useEffect(() => {
    setCustomers(dataExample)
  }, []);
  return (
    <View style={{ width: '100%', marginTop: 20 }}>
      {customers.map((customer) => (
        <React.Fragment key={customer.id}>
          <CustomerCard customer={customer} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default CustomerList;
