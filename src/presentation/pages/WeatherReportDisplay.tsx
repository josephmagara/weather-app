import { WeatherReport } from "../../domain/weather/WeatherReport";
import { supportedWeatherTypes } from "../../domain/weather/WeatherType";
import {
  WeatherAnimator,
  WeatherAnimatorProps,
} from "../component/WeatherAnimator";
import React from "react";
import { View, Text } from "react-native";

export interface WeatherReportDisplayProps {
  report: WeatherReport;
}
const defaultWeatherAnimation = require("../../data/lotties/clear-sky-day.json")
const WeatherReportDisplay: React.FC<WeatherReportDisplayProps> = ({
  report,
}) => {
  const weatherType = supportedWeatherTypes.find(
    (type) => type.code === report.code
  );
  
  const sourceFile = weatherType !== undefined ? weatherType.nightFile : defaultWeatherAnimation;
  const weatherAnimatorProps: WeatherAnimatorProps = {
    loop: true,
    autoplay: true,
    sourceFile: sourceFile,
    css: {
      width: "20%",
      height: "20%",
    },
  };

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        padding: 20,
      }}
    >
      <WeatherAnimator {...weatherAnimatorProps} />
    </View>
  );
};

export default WeatherReportDisplay;
