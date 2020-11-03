import { TextProps, View } from "react-native";
import { WeatherReport } from "../../../domain/weather/WeatherReport";
import { Text } from "react-native-elements";
import React from "react";
import {
  CellCss,
  GroupedTextComponent,
  GroupedTextComponentProtocol,
  TextCss,
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
    description,
    actualTemperature,
    temperatureUnit,
  } = report;

  const generalTextColor = report.isDayTime ? "black" : "white";
  const locationTextColor = report.isDayTime ? "#656565" : "#C5C5C5";

  const cellCss: CellCss = {
    flexDirection: "column",
    flex: 1,
    alignContent: "center",
  };

  const sharedTextProp = {
    h3: true,
  };

  const sharedTextCss : TextCss = {
    textColor: generalTextColor,
    alignContent: "center",
  };
  
  const locationCellProtocol: GroupedTextComponentProtocol = {
    css: cellCss,
    textGroups: [
      {
        text: description,
        props: sharedTextProp,
        css: sharedTextCss,
      },
      {
        text: location,
        css: {
          textColor: locationTextColor,
          alignContent: "center",
        },
        props: {
          h4: true,
        },
      },
    ],
  };
  const feltTemperatureCellProtocol: GroupedTextComponentProtocol = {
    css: cellCss,
    textGroups: [
      {
        text: "Feels like",
        css: sharedTextCss,
      },
      {
        text: getTemperatureString(feltTemperature, temperatureUnit),
        props: sharedTextProp,
        css: sharedTextCss,
      },
    ],
  };
  const actualTemperatureCellProtocol: GroupedTextComponentProtocol = {
    css: cellCss,
    textGroups: [
      {
        text: "Actual Temperature",
        css: sharedTextCss,
      },
      {
        text: getTemperatureString(actualTemperature, temperatureUnit),
        props: sharedTextProp,
        css: sharedTextCss,
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
        <GroupedTextComponent {...actualTemperatureCellProtocol} />
        <GroupedTextComponent {...feltTemperatureCellProtocol} />
      </View>
    </View>
  );
};
