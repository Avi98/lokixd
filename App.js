import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlatList from './src/containers/flatlist'

export default function App() {
  return (
   
    
       <FlatList />


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
