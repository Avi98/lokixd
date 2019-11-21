import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlatList from './src/containers/flatlist'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { store } from './src/reducers';


export default function App() {
  return (
    <Provider store={store}>
       <FlatList />
    </Provider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
