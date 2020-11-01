import { TextProps, View } from "react-native";
import { WeatherReport } from "../../../domain/weather/WeatherReport";
import { Text } from "react-native-elements";
import React from "react";
import {
  CellCss,
  GroupedTextComponent,
  GroupedTextComponentProtocol,
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
  const cellCss: CellCss = {
    flexDirection: "column",
    flex: 1,
  };
  const sharedTextProp = {
    h3: true,
  };

  const generalTextColor = report.isDayTime ? "black" : "white"
  const locationTextColor = report.isDayTime ? "#656565" : "#C5C5C5"
  const locationCellProtocol: GroupedTextComponentProtocol = {
    css: cellCss,
    textGroups: [
      {
        text: description,
        props: sharedTextProp,
        css:{
          textColor: generalTextColor
        }
      },
      {
        text: location,
        css: {
          textColor: locationTextColor,
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
        css:{
          textColor: generalTextColor
        }
      },
      {
        text: getTemperatureString(feltTemperature, temperatureUnit),
        props: sharedTextProp,
        css:{
          textColor: generalTextColor
        }
      },
    ],
  };
  const actualTemperatureCellProtocol: GroupedTextComponentProtocol = {
    css: cellCss,
    textGroups: [
      {
        text: "Actual Temperature",
        css:{
          textColor: generalTextColor
        }
      },
      {
        text: getTemperatureString(actualTemperature, temperatureUnit),
        props: sharedTextProp,
        css:{
          textColor: generalTextColor
        }
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
