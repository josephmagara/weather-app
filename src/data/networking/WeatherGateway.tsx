import { ApiWeatherResponse } from "./WeatherReportResponse";
import axios from "axios";
import { WeatherReport } from "../../domain/weather/WeatherReport";

const baseUrl =
  "http://api.weatherstack.com/current?access_key=b45703095717f0f463c63387e997f28b";

export function getWeatherForCity(city: string): Promise<WeatherReport> {
  const queryString = baseUrl + "&query=" + city;
  return new Promise<WeatherReport>((resolve, reject) => {
    axios
      .get<ApiWeatherResponse>(queryString)
      .then((result) => {
        const weatherReport = weatherResponseToWeatherReport(result.data)
        resolve(weatherReport);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const weatherResponseToWeatherReport = (
  response: ApiWeatherResponse
): WeatherReport => {
  const { current } = response;
  const { country, name } = response.location;

  const degreeSymbol = "\xB0";
  const temperatureType =
    response.request.unit === "m"
      ? "C" //Celsius
      : response.request.unit === "f"
      ? "F" //Fahrenhiet
      : "K"; //Kelvin

  const weatherReport: WeatherReport = {
    code: current.weather_code,
    location: name + ", " + country,
    description: current.weather_descriptions,
    temperatureUnit: degreeSymbol + temperatureType,
    actualTemperature: current.temperature,
    feltTemperature: current.feelslike,
    isDayTime: current.is_day,
  };


  return weatherReport
};
