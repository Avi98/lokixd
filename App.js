import React from 'react';
import { StyleSheet, View } from 'react-native';
import FlatList from './src/containers/flatlist'
import { Provider } from 'react-redux'
import { store } from './src/reducers';
import { black } from 'ansi-colors';


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <FlatList />
      </View>
    </Provider>


  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 20,
   backgroundColor: '#0000001f'
  },
});
