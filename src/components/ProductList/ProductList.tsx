import { useEffect, useState } from "react";
import { View } from "native-base";
import React from "react";
import {
  IProduct,
  IProductWithQuantity,
} from "utils/interfaces/products.interface";
import ProductCard from "components/ProductCard/ProductCard";
import NewProduct from "components/NewProduct/NewProduct";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  createProduct,
  getAllProduct,
  searchProducts,
} from "redux/action/products.actions";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";
import CreateSearchBar from "components/CreateSearchBar/CreateSearchBar";

interface Props {
  showModal: boolean;
  setShowModal: (modal: boolean) => void;
  id: string;
}

const ProductList = (props: Props) => {
  const { showModal, setShowModal, id } = props;
  const [products, setProducts] = useState<IProductWithQuantity[]>(
    [] as IProductWithQuantity[]
  );
  // const [product, setProduct] = useState({} as IProduct);
  const dispatch = useDispatch();
  // const handleEdit = (product: IProduct) => {
  //   setProduct(product);
  //   setShowModal(true);
  // };
  const loadData = async () => {
    try {
      const res = await getAllProduct(dispatch, id);
      if (res && res.products && res.products.length) {
        setProducts(res.products);
      }
    } catch (error) {
      console.log("[====error distributors]", error);
    }
  };
  const createNewProduct = async (product: IProduct) => {
    try {
      const res = await createProduct(dispatch, product);
      setProducts([{ ...res, quantity: 0 }, ...products]);
    } catch (error) {
      Alert.alert("Error!");
    }
  };
  const search = async (text: string) => {
    try {
      const res = await searchProducts(dispatch, text, id);
      if (res && res.products && res.products.length) {
        setProducts(res.products);
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
      <CreateSearchBar search={search} setShowModal={setShowModal} />
      <View style={{ width: "100%", marginTop: 20 }}>
        <NewProduct
          setShowModal={setShowModal}
          showModal={showModal}
          // product={product}
          createNew={createNewProduct}
          categories={id}
        />
        {products?.map((product) => (
          // <TouchableOpacity
          //   activeOpacity={0.9}
          //   key={product.id}
          //   onPress={() => handleEdit(product)}
          // >
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
          // </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default ProductList;
