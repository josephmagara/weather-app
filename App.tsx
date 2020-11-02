import * as React from "react";
import { AppState, StyleSheet, Text, View } from "react-native";
import AppStateProvider, {
  AppProviderProps,
} from "./src/data/contexts/AppContext";
import AppRouter from "./src/data/routing/AppRouter";

export default function App() {
  const initialAppState: AppProviderProps = {
    children: <AppRouter />,
    loadCurrentWeather: true,
    cityToQuery: "Melbourne",
  };
  return (
    <AppStateProvider {...initialAppState}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
