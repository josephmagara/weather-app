import { ApiWeatherResponse } from "./WeatherReportResponse";
import axios from "axios";
import { WeatherReport } from "../../domain/weather/WeatherReport";
import { WEATHER_API_URL, ACCESS_KEY } from "../../../env"

export function getWeatherForCity(city: string): Promise<ApiWeatherResponse> {
  const baseUrl = `${WEATHER_API_URL}current?access_key=${ACCESS_KEY}`;
  const queryString = baseUrl + "&query=" + city;
  return new Promise<ApiWeatherResponse>((resolve, reject) => {
    axios
      .get<ApiWeatherResponse>(queryString)
      .then((result) => {
        resolve(result.data);
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

  return weatherReport;
};
