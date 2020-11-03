import * as React from "react";
import { View } from "react-native";
import { WeatherReport } from "../../domain/weather/WeatherReport";
import {
  BottomNavigationComponent,
  NavigationCellId,
  NavigationProps,
} from "../../presentation/component/navigation/BottomNavigationComponent";
import { SelectLocationPage } from "../../presentation/pages/SelectLocationPage";
import WeatherReportPage, {
  WeatherReportPageProps,
} from "../../presentation/pages/WeatherReportPage";
import { AppContext } from "../contexts/AppContext";
import { getItemKey } from "../utils/CommonUtils";

const AppRouter: React.FC<{}> = () => {
  return (
    <AppContext.Consumer>
      {({
        isLoading,
        report,
        currentSelectedView,
        getWeatherFor,
        onNavigationCellSelected,
      }) => {
        const weatherReport: WeatherReport = {
          code: 113,
          location: "London",
          description: "Overcast",
          temperatureUnit: "\xB0C",
          actualTemperature: 25,
          feltTemperature: 28,
          isDayTime: false,
        };

        const props: WeatherReportPageProps = {
          report: weatherReport,
        };

        const nonNullProps = report !== undefined ? { report: report } : props;

        const navigationProps: NavigationProps = {
          isDayTime: nonNullProps.report.isDayTime,
          activeCellId: currentSelectedView,
          onNavCellClicked: (cell: NavigationCellId) => {
            onNavigationCellSelected(cell);
          },
        };

        let pageToView = <WeatherReportPage {...nonNullProps} />;

        if (currentSelectedView === "list_of_cities") {
          const handleCitySelected = (city: string) => {
            getWeatherFor(city);
          };
          pageToView = (
            <SelectLocationPage  key={getItemKey()} isDayTime={nonNullProps.report.isDayTime} onCitySelected={handleCitySelected} />
          );
        }

        return (
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View  key={getItemKey()} style={{ flex: 0.9 }}>{pageToView}</View>
            <View  key={getItemKey()} style={{ flex: 0.1 }}>
              <BottomNavigationComponent  key={getItemKey()} {...navigationProps} />
            </View>
          </View>
        );
      }}
    </AppContext.Consumer>
  );
};

export default AppRouter;
