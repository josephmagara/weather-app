import { WeatherReportResponse } from "./WeatherReportResponse";
import axios from "axios";

const baseUrl = "http://api.weatherstack.com/current?access_key=b45703095717f0f463c63387e997f28b";

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
