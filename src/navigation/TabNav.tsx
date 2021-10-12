import React from 'react';
import StockScreen from 'screens/stock/StockScreen';
import CreateStockScreen from 'screens/stock/CreateStockScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import PostOrderScreen from 'screens/PostOrderScreen';
import SettingScreen from 'screens/SettingScreen';
import StatisticScreen from 'screens/StatisticScreen';
import EachTab from './components/EachTab';
import TabButtonCreate from './components/TabButtonCreate';
import { AntDesign } from '@expo/vector-icons';
import CustomerSupplierScreen from 'screens/CustomerSupplier/CustomerSupplier';
import CategoriesScreen from 'screens/Categories/Categories';
import ProductScreen from 'screens/Products/Products';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/home/HomeScreen';

interface Props {}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CategoriesTab = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
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
const TabNav = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 80,
          ...styles.bottomTabStyle,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <EachTab focused={focused} title="home" />
          ),
        }}
      />
      <Tab.Screen
        name="Stock"
        component={CreateStockScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <EachTab focused={focused} title="stock" />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoriesTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <EachTab focused={focused} title="category" />
          ),
        }}
      />
      <Tab.Screen
        name="Object"
        component={CustomerSupplierScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <EachTab focused={focused} title="object" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#f7eFFF',
    borderTopColor: '#3c096c',
    borderTopWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
  },
});

export default TabNav;
