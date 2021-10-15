import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CreateStockInScreen from 'screens/stock/components/CreateStockInScreen';
import CreateStockOutScreen from 'screens/stock/components/CreateStockOutScreen';
import StockScreen from 'screens/stock/StockScreen';

interface Props {}

const Stack = createStackNavigator();

const StockTab = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName="Stock">
      <Stack.Screen
        name="Stock"
        options={{ headerShown: false }}
        component={StockScreen}
      />
      <Stack.Screen
        name="CreateStockIn"
        options={{ headerShown: false }}
        component={CreateStockInScreen}
      />
      <Stack.Screen
        name="CreateStockOut"
        options={{ headerShown: false }}
        component={CreateStockOutScreen}
      />
    </Stack.Navigator>
  );
};

export default StockTab;
