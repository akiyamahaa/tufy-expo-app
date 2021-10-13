import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CategoriesScreen from 'screens/Categories/Categories';
import ProductScreen from 'screens/Products/Products';

interface Props {}

const Stack = createStackNavigator();

const CategoriesTab = () => {
  return (
    <Stack.Navigator initialRouteName="CategoriesList">
      <Stack.Screen
        name="CategoriesList"
        options={{ headerShown: false }}
        component={CategoriesScreen}
      />
      <Stack.Screen
        name="ProductList"
        options={{ headerShown: false }}
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
};

export default CategoriesTab;
