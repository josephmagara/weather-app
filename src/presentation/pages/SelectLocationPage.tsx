import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { getItemKey } from "../../data/utils/CommonUtils";
import { supportedCitiesViewConfigs } from "../component/cities/SupportedCitiesViewConfig";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  cell: {
    backgroundColor: "#F5F5F9",
    borderColor: "white",
    flex: 0.5,
    padding: 12,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

interface SelectLocationProps {
  isDayTime: boolean;
  onCitySelected: (city: string) => void;
}

export const SelectLocationPage: React.FC<SelectLocationProps> = ({
  onCitySelected,
}) => {
  return (
    <View key={getItemKey()} style={styles.container}>
      <FlatList
        key={getItemKey()}
        data={supportedCitiesViewConfigs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={getItemKey()}
            style={styles.cell}
            onPress={() => {
              const cityName = item.city;
              onCitySelected(cityName);
            }}
          >
            <View key={getItemKey()}>
              <Text key={getItemKey()} style={styles.item}>
                {item.city + ", " + item.country}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
