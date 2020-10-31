import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import AppRouter from './src/data/routing/AppRouter';

export default function App() {
  return <AppRouter/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
