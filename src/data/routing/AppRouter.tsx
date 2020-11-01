import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WeatherReport } from "../../domain/weather/WeatherReport";
import WeatherReportPage, { WeatherReportPageProps } from "../../presentation/pages/WeatherReportPage";

const AppRouter: React.FC<{}> = () => {

  const weatherReport: WeatherReport = {
    code: 143,
    location: "Melbourne",
    description: "Overcast",
    temperatureUnit:"\xB0C",
    actualTemperature: 25,
    feltTemperature: 28,
    isDayTime: false
  }

  const props: WeatherReportPageProps = {
    report: weatherReport
  }

  return <WeatherReportPage {...props}/>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AppRouter;
