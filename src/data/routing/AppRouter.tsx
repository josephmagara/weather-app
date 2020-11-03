import * as React from "react";
import { View } from "react-native";
import { WeatherReport } from "../../domain/weather/WeatherReport";
import {
  BottomNavigationComponent,
  NavigationCellId,
  NavigationProps,
} from "../../presentation/component/navigation/BottomNavigationComponent";
import WeatherReportPage, {
  WeatherReportPageProps,
} from "../../presentation/pages/WeatherReportPage";
import { AppContext } from "../contexts/AppContext";

const AppRouter: React.FC<{}> = () => {
  return (
    <AppContext.Consumer>
      {({
        isLoading,
        report,
        currentSelectedView,
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

        const actualProps = report !== undefined ? { report: report } : props;

        const navigationProps: NavigationProps = {
          isDayTime: actualProps.report.isDayTime,
          activeCellId: currentSelectedView,
          onNavCellClicked: (cell: NavigationCellId) => {
            onNavigationCellSelected(cell);
          },
        };

        return (
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 0.9 }}>
              <WeatherReportPage {...actualProps} />
            </View>
            <View style={{ flex: 0.1 }}>
              <BottomNavigationComponent {...navigationProps} />
            </View>
          </View>
        );
      }}
    </AppContext.Consumer>
  );
};

export default AppRouter;
