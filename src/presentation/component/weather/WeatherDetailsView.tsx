import { TextProps, View } from "react-native";
import { WeatherReport } from "../../../domain/weather/WeatherReport";
import { Text } from "react-native-elements";
import React from "react";
import {
  CellCss,
  GroupedTextComponent,
  GroupedTextComponentProtocol,
  TextCss,
  TextProtocol,
} from "../text/GroupedTextComponent";

function getTemperatureString(amount: number, temperatureUnit: string) {
  return amount + " " + temperatureUnit;
}

export interface WeatherDetailsView {
  report: WeatherReport;
}

export const WeatherDetailsView: React.FC<WeatherDetailsView> = ({
  report,
}) => {
  const {
    location,
    feltTemperature,
    actualTemperature,
    temperatureUnit,
  } = report;
  const cellCss: CellCss = {
    flexDirection: "column",
    flex:1
  };
  const sharedTextProp = {
    h3: true,
  };
  const locationCellProtocol: GroupedTextComponentProtocol = {
    css: cellCss,
    textGroups: [
      {
        text: location,
        props: sharedTextProp,
      },
    ],
  };
  const feltTemperatureCellProtocol: GroupedTextComponentProtocol = {
    css: cellCss,
    textGroups: [{
      text: "Feels like"
    },
      {
        text: getTemperatureString(feltTemperature, temperatureUnit),
        props: sharedTextProp,
      },
    ],
  };
  const actualTemperatureCellProtocol: GroupedTextComponentProtocol = {
    css: cellCss,
    textGroups: [{
      text: "Actual Temperature"
    },
      {
        text: getTemperatureString(actualTemperature, temperatureUnit),
        props: sharedTextProp,
      },
    ],
  };

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        padding: 20,
      }}
    >
      <GroupedTextComponent {...locationCellProtocol} />
      <View
        style={{
          flexDirection: "row",
          flex: 1,
        }}
      >
        <GroupedTextComponent {...feltTemperatureCellProtocol} />
        <GroupedTextComponent {...actualTemperatureCellProtocol} />
      </View>
    </View>
  );
};
