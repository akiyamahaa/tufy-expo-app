import CreateSearchBar from "components/CreateSearchBar/CreateSearchBar";
import CustomerCard from "components/CustomerCard/CustomerCard";
import NewCustomerSupplier from "components/NewCustomerSupplier/NewCustomerSupplier";
import { Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import {
  createDistributor,
  getAllDistributors,
  searchDistributors,
} from "redux/action/distributors.actions";
import { IDistributor } from "utils/interfaces/distributors.interface";

interface Props {
  setShowModal: (value: boolean) => void;
  showModal: boolean;
}

const DistributorList = (props: Props) => {
  const { setShowModal, showModal } = props;
  const [distributors, setDistributors] = useState<IDistributor[]>(
    [] as IDistributor[]
  );
  const dispatch = useDispatch();
  const loadData = async () => {
    try {
      const res = await getAllDistributors(dispatch);
      if (res && res.distributors && res.distributors.length) {
        setDistributors(res.distributors);
      }
    } catch (error) {
      console.log("[====error distributors]", error);
    }
  };
  const search = async (text: string) => {
    try {
      const res = await searchDistributors(dispatch, text);
      if (res.distributor?.id) {
        setDistributors([res.distributor]);
      }
    } catch (error) {
      console.log("[====error distributors]", error);
    }
  };
  const createNewDistributor = async (distributor: IDistributor) => {
    try {
      const res = await createDistributor(dispatch, distributor);
      if (!res.id) {
        throw new Error();
      }
      setDistributors([...distributors, res]);
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
        active={true}
        createNew={createNewDistributor}
      />
      <CreateSearchBar
        setShowModal={setShowModal}
        search={search}
        refresh={loadData}
      />
      <View style={{ width: "100%", marginTop: 20 }}>
        {distributors &&
          distributors?.map((distributor) => (
            <React.Fragment key={distributor.id}>
              <CustomerCard customer={distributor} />
            </React.Fragment>
          ))}
      </View>
    </>
  );
};

export default DistributorList;
