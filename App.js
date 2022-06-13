import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainScreen from './screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
     
      <MainScreen />
     
    </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
