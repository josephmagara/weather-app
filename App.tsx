import * as React from "react";
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
  return <AppStateProvider {...initialAppState} />;
}
