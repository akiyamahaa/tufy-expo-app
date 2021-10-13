import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from 'screens/home/HomeScreen';
import InventoryScreen from 'screens/inventory/InventoryScreen';

interface Props {}

export type HomeStackParamsList = {
  Home: undefined;
  Inventory: undefined;
};

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeTab = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Inventory"
        options={{ headerShown: false }}
        component={InventoryScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeTab;
