import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/reducers';
import ScreenRoutes from "./src/containers/screensRoute"

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ScreenRoutes />
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
