import React from "react";
import { View } from "react-native";
import { TextProps, Text } from "react-native-elements";

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
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
}

export type CellCss = TextCss

export const GroupedTextComponent: React.FC<GroupedTextComponentProtocol> = ({
  css,
  textGroups,
}) => {
  const textCells = textGroups.map((textItem) => {
    const { text, css, props } = textItem;
    return (
      <View style={{ flex: css?.flex, flexDirection: css?.flexDirection }}>
        <Text {...props}>{text}</Text>
      </View>
    );
  });

  return (
    <View style={{ flex: css?.flex, flexDirection: css?.flexDirection }}>
      {textCells.map((textCell) => textCell)}
    </View>
  );
};
