import React from "react";
import LottieView from 'lottie-react-native'; 

export interface WeatherAnimatorProps {
  loop: boolean;
  autoplay: boolean;
  fileName: string;
  css: LottieCss;
}

export interface LottieCss {
  height: number | string;
  width: number | string;
}

export const WeatherAnimator: React.FC<WeatherAnimatorProps> = ({
  loop,
  autoplay,
  fileName,
  css,
}) => {
  
  const filePath = "../../data/lotties/" + fileName;
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    source: filePath,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <LottieView {...defaultOptions} />;
};
