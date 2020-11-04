import React from "react";
import { shallow } from "enzyme";
import WeatherReportPage from "../../../src/presentation/pages/WeatherReportPage";
import { WeatherReport } from "../../../src/domain/weather/WeatherReport";

describe("The weather report page", () => {
  test("should have view displaying an animated depiction of the report", () => {
    const selectLocationPage = renderWeatherReportPage();
    const locationsList = selectLocationPage.find("WeatherAnimator");
    expect(locationsList).toExist();
  });
});

function renderWeatherReportPage() {
  const report: WeatherReport = {
    code: 113,
    location: "Melbourne, Australia",
    description: "Sunny",
    temperatureUnit: "\xB0C",
    actualTemperature: 25,
    feltTemperature: 28,
    isDayTime: false,
  };

  return shallow(<WeatherReportPage report={report} />);
}
