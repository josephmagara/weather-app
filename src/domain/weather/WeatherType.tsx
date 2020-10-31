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
    dayFile: require("../../data/lotties/clear-sky-day.json"),
    nightFile: require("../../data/lotties/clear-sky-night.json"),
  },
  {
    code: 116,
    description: "Partly cloudy",
    dayFile: require("../../data/lotties/partly-cloudy-day.json"),
    nightFile: require("../../data/lotties/partly-cloudy-night.json"),
  },
  {
    code: 119,
    description: "Cloudy",
    dayFile: require("../../data/lotties/cloudy-day.json"),
    nightFile: require("../../data/lotties/cloudy-night.json"),
  },
  {
    code: 122,
    description: "Overcast",
    dayFile: require("../../data/lotties/misty-day.json"),
    nightFile: require("../../data/lotties/misty-night.json"),
  },
  {
    code: 143,
    description: "Mist",
    dayFile: require("../../data/lotties/misty-day.json"),
    nightFile: require("../../data/lotties/misty-night.json"),
  },
  {
    code: 176,
    description: "Patchy rain possible",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
  },
  {
    code: 179,
    description: "Patchy snow possible",
    dayFile: require("../../data/lotties/snowy-day.json"),
    nightFile: require("../../data/lotties/snowy-night.json"),
  },
  {
    code: 182,
    description: "Patchy sleet possible",
    dayFile: require("../../data/lotties/snowy-day.json"),
    nightFile: require("../../data/lotties/snowy-night.json"),
  },
  {
    code: 185,
    description: "Patchy freezing drizzle possible",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
  },
  {
    code: 200,
    description: "Thundery outbreaks possible",
    dayFile: require("../../data/lotties/thunderstorm-day.json"),
    nightFile: require("../../data/lotties/thunderstorm-night.json"),
  },
  {
    code: 227,
    description: "Blowing snow",
    dayFile: require("../../data/lotties/snowy-day.json"),
    nightFile: require("../../data/lotties/snowy-night.json"),
  },
  {
    code: 230,
    description: "Blizzard",
    dayFile: require("../../data/lotties/snowy-day.json"),
    nightFile: require("../../data/lotties/snowy-night.json"),
  },
  {
    code: 248,
    description: "Fog",
    dayFile: require("../../data/lotties/misty-day.json"),
    nightFile: require("../../data/lotties/misty-night.json"),
  },
  {
    code: 260,
    description: "Freezing fog",
    dayFile: require("../../data/lotties/misty-day.json"),
    nightFile: require("../../data/lotties/misty-night.json"),
  },
  {
    code: 263,
    description: "Patchy light drizzle",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
  },
  {
    code: 266,
    description: "Light drizzle",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
  },
  {
    code: 281,
    description: "Freezing drizzle",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
  },
  {
    code: 284,
    description: "Heavy freezing drizzle",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
  },
  {
    code: 293,
    description: "Patchy light rain",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
  },
  {
    code: 296,
    description: "Light rain",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
  },
  {
    code: 299,
    description: "Moderate rain at times",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
  },
  {
    code: 302,
    description: "Moderate rain",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
  },
  {
    code: 305,
    description: "Heavy rain at times",
    dayFile: require("../../data/lotties/thunderstorm-day.json"),
    nightFile: require("../../data/lotties/thunderstorm-night.json"),
  },
  {
    code: 308,
    description: "Heavy rain",
    dayFile: require("../../data/lotties/thunderstorm-day.json"),
    nightFile: require("../../data/lotties/thunderstorm-night.json"),
  },
  {
    code: 311,
    description: "Light freezing rain",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
  },
];
