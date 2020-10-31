import { WeatherReport } from "../../domain/weather/WeatherReport";
import { supportedWeatherTypes } from "../../domain/weather/WeatherType";
import {
  WeatherAnimator,
  WeatherAnimatorProps,
} from "../component/WeatherAnimator";
import React from "react";

export interface WeatherReportDisplayProps {
  report: WeatherReport;
}

const WeatherReportDisplay: React.FC<WeatherReportDisplayProps> = ({
  report,
}) => {
  const weatherType = supportedWeatherTypes.find(type => type.code === report.code)
  const fileName = weatherType !== undefined ? weatherType.dayFile : ""
  const weatherAnimatorProps: WeatherAnimatorProps = {
    loop: false,
    autoplay: true,
    fileName: fileName,
    css: {
      width: "20%",
      height: "20%"
    },
  };

  return (
    <WeatherAnimator {...weatherAnimatorProps} />
  );
};

export default WeatherReportDisplay
