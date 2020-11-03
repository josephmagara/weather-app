import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export interface NavigationProps {
  activeCellId: NavigationCellId;
  isDayTime: boolean;
  onNavCellClicked: (cellId: NavigationCellId) => void;
}

export type NavigationCellId = "current_weather" | "list_of_cities";

export const BottomNavigationComponent: React.FC<NavigationProps> = ({
  activeCellId,
  isDayTime,
  onNavCellClicked,
}) => {
  const weatherCellIsActive = activeCellId === "current_weather";
  const weatherIconColor = weatherCellIsActive ? "#007FF9" : "black";
  const locationIconColor = weatherCellIsActive ? "black" : "#007FF9";
  const weatherIcon = weatherCellIsActive ? "cloud" : "cloud-queue";

  const backgroundColor = isDayTime ? "#F5F5F9" : "#1C1A1B";
  const onWeatherCellPressed = () => {
    onNavCellClicked("current_weather")
  };

  const onLocationCellPressed = () => {
    onNavCellClicked("list_of_cities")
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cell}
        onPress={() => onWeatherCellPressed()}
      >
        <View>
          <Icon
            name={weatherIcon}
            type={weatherIcon}
            color={weatherIconColor}
          />
          <Text>Current Weather</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cell}
        onPress={() => onLocationCellPressed()}
      >
        <View style={styles.cell}>
          <Icon
            name="location-on"
            type="location_on"
            color={locationIconColor}
          />
          <Text>Select Location</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderColor: "darkgrey",
    borderTopWidth: 0.5,
  },
  cell: {
    backgroundColor: "#F5F5F9",
    borderColor: "darkgrey",
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
