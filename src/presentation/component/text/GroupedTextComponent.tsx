import React from "react";
import { ColorValue, View } from "react-native";
import { TextProps, Text } from "react-native-elements";
import { getItemKey } from "../../../data/utils/CommonUtils";

export interface TextProtocol {
  text: string;
  props?: TextProps;
  css?: TextCss;
}

export interface GroupedTextComponentProtocol {
  css?: CellCss;
  textGroups: Array<TextProtocol>;
}

export interface TextCss {
  flex?: number;
  textColor?: ColorValue;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";
}

export type CellCss = TextCss;

export const GroupedTextComponent: React.FC<GroupedTextComponentProtocol> = ({
  css,
  textGroups,
}) => {
  const textCells = textGroups.map((textItem) => {
    const { text, css, props } = textItem;
    const textColor = css?.textColor !== undefined ? css.textColor : "black";
    return (
      <View
        key={getItemKey()}
        style={{
          flex: css?.flex,
          flexDirection: css?.flexDirection,
          justifyContent: css?.justifyContent,
          alignContent: css?.alignContent,
        }}
      >
        <Text key={getItemKey()} {...props} style={{ color: textColor }}>
          {text}
        </Text>
      </View>
    );
  });

  return (
    <View
      key={getItemKey()}
      style={{
        flex: css?.flex,
        flexDirection: css?.flexDirection,
        alignContent: css?.alignContent,
        justifyContent: css?.justifyContent,
      }}
    >
      {textCells.map((textCell) => textCell)}
    </View>
  );
};
