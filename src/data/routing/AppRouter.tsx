import * as React from "react";
import { WeatherReport } from "../../domain/weather/WeatherReport";
import WeatherReportPage, {
  WeatherReportPageProps,
} from "../../presentation/pages/WeatherReportPage";
import { AppContext } from "../contexts/AppContext";

const AppRouter: React.FC<{}> = () => {
  return (
    <AppContext.Consumer>
      {({ isLoading, report }) => {
        const weatherReport: WeatherReport = {
          code: 143,
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

        return <WeatherReportPage {...actualProps} />;
      }}
    </AppContext.Consumer>
  );
};

export default AppRouter;
