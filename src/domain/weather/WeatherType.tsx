export interface WeatherType {
  code: number;
  dayCondition: string;
  nightCondition: string;
}

export const supportedWeatherTypes: Array<WeatherType> = [
  {
    code: 113,
    dayCondition: "Sunny",
    nightCondition: "Clear",
  },
  {
    code: 116,
    dayCondition: "Partly cloudy",
    nightCondition: "Partly cloudy",
  },
  {
    code: 119,
    dayCondition: "Cloudy",
    nightCondition: "Cloudy",
  },
  {
    code: 122,
    dayCondition: "Overcast",
    nightCondition: "Overcast",
  },
  {
    code: 143,
    dayCondition: "Mist",
    nightCondition: "Mist",
  },
  {
    code: 176,
    dayCondition: "Patchy rain possible",
    nightCondition: "Patchy rain possible",
  },
  {
    code: 179,
    dayCondition: "Patchy snow possible",
    nightCondition: "Patchy snow possible",
  },
  {
    code: 182,
    dayCondition: "Patchy sleet possible",
    nightCondition: "Patchy sleet possible",
  },
  {
    code: 185,
    dayCondition: "Patchy freezing drizzle possible",
    nightCondition: "Patchy freezing drizzle possible",
  },
  {
    code: 200,
    dayCondition: "Thundery outbreaks possible",
    nightCondition: "Thundery outbreaks possible",
  },
  {
    code: 227,
    dayCondition: "Blowing snow",
    nightCondition: "Blowing snow",
  },
  {
    code: 230,
    dayCondition: "Blizzard",
    nightCondition: "Blizzard",
  },
  {
    code: 248,
    dayCondition: "Fog",
    nightCondition: "Fog",
  },
  {
    code: 260,
    dayCondition: "Freezing fog",
    nightCondition: "Freezing fog",
  },
  {
    code: 263,
    dayCondition: "Patchy light drizzle",
    nightCondition: "Patchy light drizzle",
  },
  {
    code: 266,
    dayCondition: "Light drizzle",
    nightCondition: "Light drizzle",
  },
  {
    code: 281,
    dayCondition: "Freezing drizzle",
    nightCondition: "Freezing drizzle",
  },
  {
    code: 284,
    dayCondition: "Heavy freezing drizzle",
    nightCondition: "Heavy freezing drizzle",
  },
  {
    code: 293,
    dayCondition: "Patchy light rain",
    nightCondition: "Patchy light rain",
  },
  {
    code: 296,
    dayCondition: "Light rain",
    nightCondition: "Light rain",
  },
  {
    code: 299,
    dayCondition: "Moderate rain at times",
    nightCondition: "Moderate rain at times",
  },
  {
    code: 302,
    dayCondition: "Moderate rain",
    nightCondition: "Moderate rain",
  },
  {
    code: 305,
    dayCondition: "Heavy rain at times",
    nightCondition: "Heavy rain at times",
  },
  {
    code: 308,
    dayCondition: "Heavy rain",
    nightCondition: "Heavy rain",
  },
  {
    code: 311,
    dayCondition: "Light freezing rain",
    nightCondition: "Light freezing rain",
  },
];
