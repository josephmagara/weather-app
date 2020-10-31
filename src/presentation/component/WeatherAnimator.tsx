import React from "react";
import LottieView from "lottie-react-native";

export interface WeatherAnimatorProps {
  loop: boolean;
  autoplay: boolean;
  sourceFile: string;
  css: LottieCss;
}

export interface LottieCss {
  height: number | string;
  width: number | string;
}

export const WeatherAnimator: React.FC<WeatherAnimatorProps> = ({
  loop,
  autoplay,
  sourceFile,
  css,
}) => {
  return (
    <LottieView
      loop={loop}
      source={sourceFile}
      autoPlay={autoplay}
      autoSize={true}
    />
  );
};
