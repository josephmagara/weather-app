import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

export interface NavigationProps {
  activeCellId: "current_weather" | "list_of_cities";
  isDayTime: boolean;
}

export const BottomNavigationComponent: React.FC<NavigationProps> = ({
  activeCellId,
  isDayTime,
}) => {
  const weatherCellIsActive = activeCellId === "current_weather";
  const locationIconColor = weatherCellIsActive ? "black" : "#007FF9";
  const weatherIconColor = weatherCellIsActive ? "#007FF9" : "black";
  const weatherIcon = weatherCellIsActive ? "cloud" : "cloud-queue";

  const backgroundColor = isDayTime ? "#F5F5F9" : "#1C1A1B";

  return (
    <View
      style={styles.container}
    >
      <View style={styles.cell}>
        <Icon
          name={weatherIcon}
          type={weatherIcon}
          color={weatherIconColor}
        />
        <Text>Current Weather</Text>
      </View>
      <View
        style={styles.cell}
      >
        <Icon
          name="location-on"
          type="location_on"
          color={locationIconColor}
        />
        <Text>Select Location</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderColor: "darkgrey",
    borderTopWidth: .5,
  },
  cell: {
    backgroundColor: "#F5F5F9",
    borderColor: "darkgrey",
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center"
  }
});
