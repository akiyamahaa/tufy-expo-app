import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import EachTab from './components/EachTab';
import CustomerSupplierScreen from 'screens/CustomerSupplier/CustomerSupplier';
import CategoriesTab from './CategoriesTab';
import HomeTab from './HomeTab';
import StockTab from './StockTab';

interface Props {}

const Tab = createBottomTabNavigator();

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
      initialRouteName="HomeTab"
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <EachTab focused={focused} title="home" />
          ),
        }}
      />
      <Tab.Screen
        name="StockTab"
        component={StockTab}
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
