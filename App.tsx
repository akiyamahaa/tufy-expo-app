import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import GlobalStyles from 'utils/styles';
import TabNav from 'navigation/TabNav';
import store from 'redux/store';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: 'rgb(255, 45, 85)',
  },
};

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily: 'Roboto',
      },
    },
    /*
      Element:{
        baseStyle:{},
        defaultProps:{},
        variant:{},
        size:{},
      }
    */
  },
});

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      'Roboto-bold': require('assets/fonts/Roboto-Bold.ttf'),
      'Roboto-italic': require('assets/fonts/Roboto-Italic.ttf'),
      Roboto: require('assets/fonts/Roboto-Regular.ttf'),
    });
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <SafeAreaProvider style={[styles.root, GlobalStyles.AndroidSafeArea]}>
      {/* <StatusBar hidden={true}/> */}
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer theme={MyTheme}>
            <TabNav />
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
