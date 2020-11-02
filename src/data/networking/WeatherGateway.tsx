import { WEATHER_API_URL, ACCESS_KEY } from "@env";
import { WeatherReportResponse } from "./WeatherReportResponse";
import Frisbee from "frisbee"

const baseUrl = WEATHER_API_URL + "current?access_key=" + ACCESS_KEY;

// create a new instance of Frisbee
const api = new Frisbee({
    baseURI: baseUrl, // optional
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
})

function getWeatherForCity(city: string): Promise<WeatherReportResponse>{
    const queryString = "query=" + city
    return api._fetch(queryString)
}
