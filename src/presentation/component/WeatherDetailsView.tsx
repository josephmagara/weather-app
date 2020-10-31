import { View } from "react-native";
import { WeatherReport } from "../../domain/weather/WeatherReport";
import { Text } from "react-native-elements";
import React from "react";

export interface WeatherDetailsView {
  report: WeatherReport;
}

export const WeatherDetailsView: React.FC<WeatherDetailsView> = ({
  report,
}) => {
  const { location, feltTemperature, actualTemperature } = report;

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        padding: 20,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text h1 style={{ textAlignVertical: "center", textAlign: "center" }}>
          {location}
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <Text h4>{actualTemperature}</Text>
        </View>
        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <Text h4>{feltTemperature}</Text>
        </View>
      </View>
    </View>
  );
};
