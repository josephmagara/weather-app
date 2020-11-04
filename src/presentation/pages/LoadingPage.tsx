import * as React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { getItemKey } from "../../data/utils/CommonUtils";

const loadingPageAnimations: Array<string> = [
  require("../../data/assets/lotties/loading_animation_two_smog.json"),
  require("../../data/assets/lotties/loading_animation_three_falling_feathers.json"),
];

export const LoadingPage: React.FC<{}> = () => {
  const animationIndex = Math.floor(Math.random() * 1) + 0;
  const animationFile = loadingPageAnimations[animationIndex];

  const props = {
    h1: true,
  };
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View key={getItemKey()} style={{ flex: 0.9 }}>
        <LottieView
          loop={true}
          source={animationFile}
          autoPlay={true}
          resizeMode={"cover"}
        />
      </View>

      <View key={getItemKey()} style={{ flex: 0.1 , alignContent:"center"}}>
          <Text
            key={getItemKey()}
            {...props}
            style={{
              flexDirection: "row",
              flex: 1,
              color: "black",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            Retrieving weather report...
          </Text>
      </View>
    </View>
  );
};
