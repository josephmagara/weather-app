import axios from "axios";
import { getWeatherForCity, weatherResponseToWeatherReport } from "../src/data/networking/WeatherGateway";
import { ApiWeatherResponse } from "../src/data/networking/WeatherReportResponse";
import { WeatherReport } from "../src/domain/weather/WeatherReport";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Weather gateway", () => {
  beforeEach(() => {
    mockedAxios.get = jest.fn();
    mockedAxios.post = jest.fn();
  });

  test("should fetch fetch the weather for Melbourne", async () => {

    const expectedResult: ApiWeatherResponse = {
      request: {
        unit: "m"
      },
      location: {
        name: "Melbourne",
        country: "Australia",
      },
      current: {
        temperature: 25,
        weather_code: 113,
        feelslike: 28,
        weather_descriptions: "Sunny",
        is_day: false
      },
    }

    mockedAxios.get.mockReturnValueOnce(
      Promise.resolve({ data: expectedResult })
    );
    const result = await getWeatherForCity("Melbourne");

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result).toBe(expectedResult);
  });

  test("should correctly convert a weather response to a weather report", () => {
    const expectedResult: WeatherReport = {
      code: 113,
      location: "Melbourne, Australia",
      description: "Sunny",
      temperatureUnit: "\xB0C",
      actualTemperature: 25,
      feltTemperature: 28,
      isDayTime: false,
    };

    const apiResponse: ApiWeatherResponse = {
      request: {
        unit: "m"
      },
      location: {
        name: "Melbourne",
        country: "Australia",
      },
      current: {
        temperature: 25,
        weather_code: 113,
        feelslike: 28,
        weather_descriptions: "Sunny",
        is_day: false
      },
    }
    const result = weatherResponseToWeatherReport(apiResponse);
    expect(result).toMatchObject(expectedResult);
  });
});
