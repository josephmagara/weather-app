import * as React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { getItemKey } from "../../data/utils/CommonUtils";

export const ErrorPage: React.FC<{}> = () => {
  const animationFile = require("../../data/assets/lotties/error_animation.json");
  return (
    <View key={getItemKey()} style={{ flex: 1, flexDirection: "column" }}>
      <LottieView
        key={getItemKey()}
        loop={false}
        source={animationFile}
        autoPlay={true}
        resizeMode={"cover"}
      />
    </View>
  );
};
