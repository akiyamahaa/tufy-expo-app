import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Box, NativeBaseProvider } from 'native-base';
import GlobalStyles from 'utils/styles';
import TabNav from 'navigation/TabNav';
import store from 'redux/store';
import CustomInput from 'components/CustomInput';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {
  return (
    <SafeAreaProvider style={[styles.root, GlobalStyles.AndroidSafeArea]}>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer theme={MyTheme}>
            <TabNav />
            {/* <Box style={{ padding: 20 }}>
              <CustomInput />
            </Box> */}
            <StatusBar style="auto" />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
