import * as React from "react";
import AppStateProvider from "./src/data/contexts/AppContext";
import AppRouter from "./src/data/routing/AppRouter";

export default function App() {
  return (
    <AppStateProvider loadCurrentWeather={true} cityToQuery="Melbourne" currentSelectedView="current_weather">
      <AppRouter />
    </AppStateProvider>
  );
}
