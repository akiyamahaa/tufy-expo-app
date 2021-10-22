import CategoryCard from "components/CategoryCard/CategoryCard";
import { useEffect, useState } from "react";
import { Text, View } from "native-base";
import React from "react";
import {
  ICategories,
  ICategoryWithCount,
} from "utils/interfaces/categories.interface";
import {
  createCategory,
  getAllCategories,
  searchCategories,
} from "redux/action/categories.actions";
import { useDispatch } from "react-redux";
import NewCategory from "components/NewCategory/NewCategory";
import { Alert } from "react-native";
import CreateSearchBar from "components/CreateSearchBar/CreateSearchBar";

interface Props {
  setShowModal: (modal: boolean) => void;
  showModal: boolean;
}

const CategoriesList = (props: Props) => {
  const { setShowModal, showModal } = props;
  const [categories, setCategories] = useState<ICategoryWithCount[]>(
    [] as ICategoryWithCount[]
  );
  const dispatch = useDispatch();
  const loadData = async () => {
    try {
      const res = await getAllCategories(dispatch);
      if (res && res.categories && res.categories.length) {
        setCategories(res.categories);
      }
    } catch (error) {
      console.log("[====error categories]", error);
    }
  };
  const createNewCategories = async (newCate: ICategories) => {
    try {
      const res = await createCategory(dispatch, newCate);
      if (res.id) {
        setCategories([...categories, { ...res, count: 0 }]);
      }
    } catch (error) {
      Alert.alert("Error!");
    }
  };
  const search = async (text: string) => {
    try {
      const res = await searchCategories(dispatch, text);
      if (res && res.categories && res.categories.length) {
        setCategories(res.categories);
      }
    } catch (error) {
      Alert.alert("Error!");
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <CreateSearchBar
        search={search}
        setShowModal={setShowModal}
        refresh={() => null}
      />
      <NewCategory
        setShowModal={setShowModal}
        showModal={showModal}
        createNew={createNewCategories}
      />
      <View style={{ width: "100%", marginTop: 20 }}>
        {categories?.map((category) => (
          <React.Fragment key={category.id}>
            <CategoryCard category={category} />
          </React.Fragment>
        ))}
      </View>
    </>
  );
};

export default CategoriesList;
