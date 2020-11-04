import React from "react";
import { render } from "@testing-library/react";
import {
  AppContext,
  AppContextProtocol,
} from "../../../src/data/contexts/AppContext";
import { WeatherReport } from "../../../src/domain/weather/WeatherReport";
import AppRouter from "../../../src/presentation/routing/AppRouter";
import { NavigationCellId } from "../../../src/presentation/component/navigation/BottomNavigationComponent";
import { shallow } from "enzyme";

describe("The App Router", () => {
  describe("is loading and has no report", () => {
    const view = renderAppRouter(true, "current_weather");
    test("it should display the loading screen", async () => {
      const label = view.find("Text").at(0).dive().text();
      expect(label).toEqual("Retrieving weather report...");
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

  return shallow(
    <AppContext.Provider value={appContext}>
      <AppRouter />
    </AppContext.Provider>
  );
}
