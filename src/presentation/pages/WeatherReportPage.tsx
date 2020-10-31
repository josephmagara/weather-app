import { WeatherReport } from "../../domain/weather/WeatherReport";
import { supportedWeatherTypes } from "../../domain/weather/WeatherType";
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

const defaultWeatherAnimation = require("../../data/lotties/clear-sky-day.json");

const WeatherReportPage: React.FC<WeatherReportPageProps> = ({ report }) => {
  const weatherType = supportedWeatherTypes.find(
    (type) => type.code === report.code
  );

  const sourceFile =
    weatherType !== undefined ? weatherType.nightFile : defaultWeatherAnimation;

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

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        
      }}
    >
      <View style={{ flex: 0.6, padding: 20, backgroundColor:"#EFF3F9"}}>
        <WeatherAnimator {...weatherAnimatorProps} />
      </View>
      <View style={{ flex: 0.4, backgroundColor:"white" }}>
        <WeatherDetailsView {...detailViewProps} />
      </View>
    </View>
  );
};

export default WeatherReportPage;
