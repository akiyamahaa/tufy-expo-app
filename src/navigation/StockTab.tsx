import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CreateStockScreen from 'screens/stock/components/CreateStockScreen';
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
        name="CreateStock"
        options={{ headerShown: false }}
        component={CreateStockScreen}
      />
    </Stack.Navigator>
  );
};

export default StockTab;
