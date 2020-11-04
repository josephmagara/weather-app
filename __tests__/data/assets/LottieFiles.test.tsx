import { weatherTypeViewConfigs } from "../../../src/presentation/component/weather/WeatherTypeViewConfigs";

const fs = require("fs");

// async
const checkIfFileExists = (fileName: string) => {
  return new Promise((resolve, reject) => {
    fs.access(fileName, fs.constants.F_OK, (err: Error) => {
      err ? reject(false) : resolve(true);
    });
  });
};

describe("All the daytime weather animation files", () => {
  it("should all be present within the app", () => {
    const dayAnimations = weatherTypeViewConfigs.map(
      (viewConfig) => viewConfig.dayFile
    );
    dayAnimations.forEach((animationFile) => {
      expect(animationFile).toMatchObject({})
    });
  });
});

describe("All the night time weather animation files", () => {
  it("should all be present within the app", () => {
    const dayAnimations = weatherTypeViewConfigs.map(
      (viewConfig) => viewConfig.nightFile
    );
    dayAnimations.forEach((animationFile) => {
      expect(animationFile).toMatchObject({})
    });
  });
});
