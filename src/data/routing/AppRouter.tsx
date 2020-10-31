import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WeatherReport } from "../../domain/weather/WeatherReport";
import WeatherReportDisplay, { WeatherReportDisplayProps } from "../../presentation/pages/WeatherReportDisplay";

const AppRouter: React.FC<{}> = () => {

  const weatherReport: WeatherReport = {
    code: 113,
    location: "Melbourne",
    description: "Sunny",
    actualTemperature: 25,
    feltTemperature: 28
  }

  const props: WeatherReportDisplayProps = {
    report: weatherReport
  }

  return <WeatherReportDisplay {...props}/>;
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
