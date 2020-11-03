import { WeatherReportResponse } from "./WeatherReportResponse";
import axios from "axios";

const baseUrl = process.env.WEATHER_API_URL + "current?access_key=" + process.env.ACCESS_KEY;

export function getWeatherForCity(
  city: string
): Promise<WeatherReportResponse> {
  const queryString = baseUrl + "&query=" + city;
  return new Promise<WeatherReportResponse>((resolve, reject) => {
    axios
      .get<WeatherReportResponse>(queryString)
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
