import { useEffect, useState } from "react";
import { Text, View } from "native-base";
import React from "react";
import { IProductWithQuantity } from "utils/interfaces/products.interface";
import { dataProduct } from "./dataProduct";
import ProductCard from "components/ProductCard/ProductCard";

interface Props {}

const ProductList = (props: Props) => {
  const [products, setProducts] = useState<IProductWithQuantity[]>(
    [] as IProductWithQuantity[]
  );
  useEffect(() => {
    setProducts(dataProduct);
  }, []);
  return (
    <View style={{ width: '100%', marginTop: 20 }}>
      {products?.map((product) => (
        <React.Fragment key={product.id}>
          <ProductCard product={product} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default ProductList;
