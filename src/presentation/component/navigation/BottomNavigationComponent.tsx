import React from "react";
import { ColorValue, View } from "react-native";

export interface NavigationProps {
  activeCellId: "current_weather" | "list_of_cities"
}

export const BottomNavigationComponent: React.FC<NavigationProps> = ({
    activeCellId,
}) => {

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      
    </View>
  );
};
