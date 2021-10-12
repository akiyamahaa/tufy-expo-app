import { useEffect, useState } from "react";
import { Text, View } from "native-base";
import React from "react";
import {
  IProduct,
  IProductWithQuantity,
} from "utils/interfaces/products.interface";
import { dataProduct } from "./dataProduct";
import ProductCard from "components/ProductCard/ProductCard";
import NewProduct from "components/NewProduct/NewProduct";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  showModal: boolean;
  setShowModal: (modal: boolean) => void;
}

const ProductList = (props: Props) => {
  const { showModal, setShowModal } = props;
  const [products, setProducts] = useState<IProductWithQuantity[]>(
    [] as IProductWithQuantity[]
  );
  const [product, setProduct] = useState({} as IProduct);
  const handleEdit = (product: IProduct) => {
    setProduct(product);
    setShowModal(true);
  };
  useEffect(() => {
    setProducts(dataProduct);
  }, []);
  return (
    <View style={{ width: "100%", marginTop: 20 }}>
      <NewProduct
        setShowModal={setShowModal}
        showModal={showModal}
        product={product}
      />
      {products?.map((product) => (
        <TouchableOpacity
          activeOpacity={0.9}
          key={product.id}
          onPress={() => handleEdit(product)}
        >
          <ProductCard product={product} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProductList;
