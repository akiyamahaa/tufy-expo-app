import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from 'screens/HomeScreen';
import PostOrderScreen from 'screens/PostOrderScreen';
import ProductScreen from 'screens/ProductScreen';
import SettingScreen from 'screens/SettingScreen';
import StatisticScreen from 'screens/StatisticScreen';
import EachTab from './components/EachTab';
import TabButtonCreate from './components/TabButtonCreate';
import { AntDesign } from '@expo/vector-icons'; 
import CustomerSupplierScreen from 'screens/CustomerSupplier/CustomerSupplier';

interface Props {}

const Tab = createBottomTabNavigator();

const TabNav = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown:false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <EachTab focused={focused} title="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <EachTab focused={focused} title="Product" />
          ),
        }}
      />
      <Tab.Screen
        name="PostOrderScreen"
        component={PostOrderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="plus" size={35} color="#fff" />
          ),
          tabBarButton: (props) => <TabButtonCreate {...props} />,
        }}
      />
      <Tab.Screen
        name="Statistic"
        component={StatisticScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <EachTab focused={focused} title="Statistic" />
          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={CustomerSupplierScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <EachTab focused={focused} title="Thông tin" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default TabNav;
