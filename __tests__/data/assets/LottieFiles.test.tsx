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

describe("The weather animation files", () => {
  weatherTypeViewConfigs.forEach((viewConfig) => {
    it("should have it's day animation file present within the app", () => {
      expect(viewConfig.dayFile).toMatchObject({})
    });
    it("should have it's day animation file present within the app", () => {
      expect(viewConfig.nightFile).toMatchObject({})
    });
  })
});
