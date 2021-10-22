import { useEffect, useState } from "react";
import { View } from "native-base";
import React from "react";
import { ICustomer } from "utils/interfaces/customers.interface";
import CustomerCard from "components/CustomerCard/CustomerCard";
import { useDispatch } from "react-redux";
import {
  createCustomer,
  getAllCustomers,
  searchCustomers,
} from "redux/action/customers.action";
import CreateSearchBar from "components/CreateSearchBar/CreateSearchBar";
import NewCustomerSupplier from "components/NewCustomerSupplier/NewCustomerSupplier";
import { Alert } from "react-native";

interface Props {
  setShowModal: (value: boolean) => void;
  showModal: boolean;
}

const CustomerList = (props: Props) => {
  const { setShowModal, showModal } = props;
  const [customers, setCustomers] = useState<ICustomer[]>([] as ICustomer[]);
  const dispatch = useDispatch();
  const loadData = async () => {
    try {
      const res = await getAllCustomers(dispatch);
      if (res && res.customers && res.customers.length) {
        setCustomers(res.customers);
      }
    } catch (error) {
      console.log("[===Í=error customer]", error);
    }
  };
  const search = async (text: string) => {
    try {
      const res = await searchCustomers(dispatch, text);
      if (res && res.customer?.id) {
        setCustomers([res.customer]);
      }
    } catch (error) {
      console.log("[====error distributors]", error);
    }
  };
  const createNewCustomer = async (customer: ICustomer) => {
    try {
      const res = await createCustomer(dispatch, customer);
      if (!res.id) {
        throw new Error();
      }
      setCustomers([...customers, res]);
    } catch (error) {
      Alert.alert("Mời nhập số điện thoại đúng định dạng (+84...)");
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <NewCustomerSupplier
        showModal={showModal}
        setShowModal={setShowModal}
        active={false}
        createNew={createNewCustomer}
      />
      <CreateSearchBar
        setShowModal={setShowModal}
        search={search}
        refresh={loadData}
      />
      <View style={{ width: "100%", marginTop: 20 }}>
        {customers?.map((customer) => (
          <React.Fragment key={customer.id}>
            <CustomerCard customer={customer} />
          </React.Fragment>
        ))}
      </View>
    </>
  );
};

export default CustomerList;
