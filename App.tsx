import * as React from "react";
import AppStateProvider, {
  AppProviderProps,
} from "./src/data/contexts/AppContext";
import AppRouter from "./src/data/routing/AppRouter";

export default function App() {
  return (
    <AppStateProvider loadCurrentWeather={true} cityToQuery="Melbourne">
      <AppRouter />
    </AppStateProvider>
  );
}
