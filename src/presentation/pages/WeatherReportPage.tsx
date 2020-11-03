import { WeatherReport } from "../../domain/weather/WeatherReport";
import { weatherTypeViewConfigs } from "../component/weather/WeatherTypeViewConfigs";
import {
  WeatherAnimator,
  WeatherAnimatorProps,
} from "../component/weather/WeatherAnimator";
import React from "react";
import { View } from "react-native";
import { WeatherDetailsView } from "../component/weather/WeatherDetailsView";

export interface WeatherReportPageProps {
  report: WeatherReport;
}

const defaultWeatherAnimation = require("../../data/assets/lotties/clear-sky-day.json");

const WeatherReportPage: React.FC<WeatherReportPageProps> = ({ report }) => {
  const viewConfig = weatherTypeViewConfigs.find(
    (type) => type.code === report.code
  );

  const sourceFile =
    viewConfig !== undefined
      ? report.isDayTime
        ? viewConfig.dayFile
        : viewConfig.nightFile
      : defaultWeatherAnimation;

  const backgroundColor = viewConfig !== undefined ? viewConfig.backgroundColor : "#EFF3F9"

  const weatherAnimatorProps: WeatherAnimatorProps = {
    loop: true,
    autoplay: true,
    sourceFile: sourceFile,
    css: {
      width: "20%",
      height: "20%",
    },
  };

  const detailViewProps: WeatherDetailsView = {
    report: report,
  };

  const bottomBackgroundColor = report.isDayTime ? "#F5F5F9" : "#1C1A1B"

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 0.65,
          padding: 20,
          backgroundColor: backgroundColor,
        }}
      >
        <WeatherAnimator {...weatherAnimatorProps} />
      </View>
      <View style={{ flex: 0.35, backgroundColor: bottomBackgroundColor }}>
        <WeatherDetailsView {...detailViewProps} />
      </View>
    </View>
  );
};

export default WeatherReportPage;
