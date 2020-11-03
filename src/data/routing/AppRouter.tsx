import * as React from "react";
import { View } from "react-native";
import { WeatherReport } from "../../domain/weather/WeatherReport";
import {
  BottomNavigationComponent,
  NavigationCellId,
  NavigationProps,
} from "../../presentation/component/navigation/BottomNavigationComponent";
import { ErrorPage } from "../../presentation/pages/ErrorPage";
import { LoadingPage } from "../../presentation/pages/LoadingPage";
import { SelectLocationPage } from "../../presentation/pages/SelectLocationPage";
import WeatherReportPage, {
  WeatherReportPageProps,
} from "../../presentation/pages/WeatherReportPage";
import { AppContext } from "../contexts/AppContext";
import { getItemKey } from "../utils/CommonUtils";

function getMainScreens(
  report: WeatherReport,
  currentSelectedView: NavigationCellId,
  onNavigationCellSelected: (cell: NavigationCellId) => void,
  getWeatherFor: (city: string) => void
) {
  const props: WeatherReportPageProps = {
    report: report,
  };

  const navigationProps: NavigationProps = {
    isDayTime: report.isDayTime,
    activeCellId: currentSelectedView,
    onNavCellClicked: (cell: NavigationCellId) => {
      onNavigationCellSelected(cell);
    },
  };

  let pageToView = <WeatherReportPage {...props} />;

  if (currentSelectedView === "list_of_cities") {
    const handleCitySelected = (city: string) => {
      getWeatherFor(city);
    };
    pageToView = (
      <SelectLocationPage
        key={getItemKey()}
        isDayTime={report.isDayTime}
        onCitySelected={handleCitySelected}
      />
    );
  }

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View key={getItemKey()} style={{ flex: 0.9 }}>
        {pageToView}
      </View>
      <View key={getItemKey()} style={{ flex: 0.1 }}>
        <BottomNavigationComponent key={getItemKey()} {...navigationProps} />
      </View>
    </View>
  );
}

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
        let viewToDisplay = <LoadingPage />;

        if (report !== undefined) {
          viewToDisplay = getMainScreens(
            report,
            currentSelectedView,
            onNavigationCellSelected,
            getWeatherFor
          );
        } else if (!isLoading) {
          <ErrorPage />;
        }

        return viewToDisplay;
      }}
    </AppContext.Consumer>
  );
};

export default AppRouter;
