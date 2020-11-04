import React from "react";
import { render } from "@testing-library/react";
import {
  AppContext,
  AppContextProtocol,
} from "../../../src/data/contexts/AppContext";
import { WeatherReport } from "../../../src/domain/weather/WeatherReport";
import AppRouter from "../../../src/presentation/routing/AppRouter";
import { NavigationCellId } from "../../../src/presentation/component/navigation/BottomNavigationComponent";

describe("The App Router", () => {
  describe("is loading and has no report", () => {
    const view = renderAppRouter(true, "current_weather");
    test("it should display the loading screen", async () => {
      expect(
        view.getByText("Retrieving weather report...")
      ).toBeInTheDocument();
    });
  });
});

function renderAppRouter(
  isLoading: boolean,
  currentSelectedView: NavigationCellId,
  report?: WeatherReport
) {
  const appContext: AppContextProtocol = {
    isLoading: isLoading,
    report: report,
    currentSelectedView: currentSelectedView,
    getWeatherFor: (_city: string) => {},
    onNavigationCellSelected: (_cellId: NavigationCellId) => {},
  };

  return render(
    <AppContext.Provider value={appContext}>
      <AppRouter />
    </AppContext.Provider>
  );
}
