import CategoryCard from "components/CategoryCard/CategoryCard";
import { useEffect, useState } from "react";
import { Text, View } from "native-base";
import React from "react";
import { ICategoryWithCount } from "utils/interfaces/categories.interface";

interface Props {}

const CategoriesList = (props: Props) => {
  const [categories, setCategories] = useState<ICategoryWithCount[]>(
    [] as ICategoryWithCount[]
  );
  useEffect(() => {
  }, []);
  return (
    <View style={{ width: '100%', marginTop: 20 }}>
      {categories?.map((category) => (
        <React.Fragment key={category.id}>
          <CategoryCard category={category} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default CategoriesList;
