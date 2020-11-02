import { WEATHER_API_URL, ACCESS_KEY } from "react-native-dotenv";
import { WeatherReportResponse } from "./WeatherReportResponse";
import Toast from "react-native-simple-toast";
import axios from "axios";

const baseUrl = WEATHER_API_URL + "current?access_key=" + ACCESS_KEY;

export function getWeatherForCity(
  city: string
): Promise<WeatherReportResponse> {
  const queryString = baseUrl + "&query=" + city;
  Toast.show(queryString, Toast.LONG);
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
