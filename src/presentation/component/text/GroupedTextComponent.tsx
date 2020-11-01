import React from "react";
import { ColorValue, View } from "react-native";
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
  textColor?: ColorValue;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
}

export type CellCss = TextCss;

export const GroupedTextComponent: React.FC<GroupedTextComponentProtocol> = ({
  css,
  textGroups,
}) => {
  const textCells = textGroups.map((textItem) => {
    const { text, css, props } = textItem;
    const textColor = css?.textColor !== undefined ? css.textColor : "black"
    return (
      <View style={{ flex: css?.flex, flexDirection: css?.flexDirection, justifyContent: css?.justifyContent }}>
        <Text {...props} style={{ color: textColor }}>
          {text}
        </Text>
      </View>
    );
  });

  return (
    <View style={{ flex: css?.flex, flexDirection: css?.flexDirection }}>
      {textCells.map((textCell) => textCell)}
    </View>
  );
};
