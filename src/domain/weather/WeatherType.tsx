export interface WeatherType {
  code: number;
  description: string;
  dayFile: string;
  nightFile: string;
}

export const supportedWeatherTypes: Array<WeatherType> = [
  {
    code: 113,
    description: "Sunny",
    dayFile:require("../../data/lotties/clear-sky-days.json"),
    nightFile:"clear-sky-night.json"
  },
  {
    code: 116,
    description: "Partly cloudy",
    dayFile:"partly-cloudy-day.json",
    nightFile:"partly-cloudy-night.json"
  },
  {
    code: 119,
    description: "Cloudy",
    dayFile:"cloudy-day.json",
    nightFile:"cloudy-night.json"
  },
  {
    code: 122,
    description: "Overcast",
    dayFile:"misty-day.json",
    nightFile:"misty-night.json"
  },
  {
    code: 143,
    description: "Mist",
    dayFile:"misty-day.json",
    nightFile:"misty-night.json"
  },
  {
    code: 176,
    description: "Patchy rain possible",
    dayFile:"patchy-day.json",
    nightFile:"patchy-night.json"
  },
  {
    code: 179,
    description: "Patchy snow possible",
    dayFile:"snowy-day.json",
    nightFile:"snowy-night.json"
  },
  {
    code: 182,
    description: "Patchy sleet possible",
    dayFile:"snowy-day.json",
    nightFile:"snowy-night.json"
  },
  {
    code: 185,
    description: "Patchy freezing drizzle possible",
    dayFile:"patchy-day.json",
    nightFile:"patchy-night.json"
  },
  {
    code: 200,
    description: "Thundery outbreaks possible",
    dayFile:"thunderstorm-day.json",
    nightFile:"thunderstorm-night.json"
  },
  {
    code: 227,
    description: "Blowing snow",
    dayFile:"snowy-day.json",
    nightFile:"snowy-night.json"
  },
  {
    code: 230,
    description: "Blizzard",
    dayFile:"snowy-day.json",
    nightFile:"snowy-night.json"
  },
  {
    code: 248,
    description: "Fog",
    dayFile:"misty-day.json",
    nightFile:"misty-night.json"
  },
  {
    code: 260,
    description: "Freezing fog",
    dayFile:"misty-day.json",
    nightFile:"misty-night.json"
  },
  {
    code: 263,
    description: "Patchy light drizzle",
    dayFile:"party-rainy-day.json",
    nightFile:"party-rainy-night.json"
  },
  {
    code: 266,
    description: "Light drizzle",
    dayFile:"party-rainy-day.json",
    nightFile:"party-rainy-night.json"
  },
  {
    code: 281,
    description: "Freezing drizzle",
    dayFile:"party-rainy-day.json",
    nightFile:"party-rainy-night.json"
  },
  {
    code: 284,
    description: "Heavy freezing drizzle",
    dayFile:"party-rainy-day.json",
    nightFile:"party-rainy-night.json"
  },
  {
    code: 293,
    description: "Patchy light rain",
    dayFile:"party-rainy-day.json",
    nightFile:"party-rainy-night.json"
  },
  {
    code: 296,
    description: "Light rain",
    dayFile:"party-rainy-day.json",
    nightFile:"party-rainy-night.json"
  },
  {
    code: 299,
    description: "Moderate rain at times",
    dayFile:"party-rainy-day.json",
    nightFile:"party-rainy-night.json"
  },
  {
    code: 302,
    description: "Moderate rain",
    dayFile:"party-rainy-day.json",
    nightFile:"party-rainy-night.json"
  },
  {
    code: 305,
    description: "Heavy rain at times",
    dayFile:"thunderstorm-day.json",
    nightFile:"thunderstorm-night.json"
  },
  {
    code: 308,
    description: "Heavy rain",
    dayFile:"thunderstorm-day.json",
    nightFile:"thunderstorm-night.json"
  },
  {
    code: 311,
    description: "Light freezing rain",
    dayFile:"party-rainy-day.json",
    nightFile:"party-rainy-night.json"
  },
];
