import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import StatisticScreen from 'screens/StatisticScreen';
import EachTab from './components/EachTab';
import CustomerSupplierScreen from 'screens/CustomerSupplier/CustomerSupplier';
import HomeScreen from 'screens/home/HomeScreen';
import StockScreen from 'screens/stock/StockScreen';
import CreateStockScreen from 'screens/stock/CreateStockScreen';

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
        component={StatisticScreen}
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
