export interface WeatherType {
  code: number;
  dayCondition: string;
  nightCondition: string;
  dayFileName: string;
  nightFileName: string;
}

export const supportedWeatherTypes: Array<WeatherType> = [
  {
    code: 113,
    dayCondition: "Sunny",
    nightCondition: "Clear",
    dayFileName:"clear-sky-day.json",
    nightFileName:"clear-sky-night.json"
  },
  {
    code: 116,
    dayCondition: "Partly cloudy",
    nightCondition: "Partly cloudy",
    dayFileName:"partly-cloudy-day.json",
    nightFileName:"partly-cloudy-night.json"
  },
  {
    code: 119,
    dayCondition: "Cloudy",
    nightCondition: "Cloudy",
    dayFileName:"cloudy-day.json",
    nightFileName:"cloudy-night.json"
  },
  {
    code: 122,
    dayCondition: "Overcast",
    nightCondition: "Overcast",
    dayFileName:"misty-day.json",
    nightFileName:"misty-night.json"
  },
  {
    code: 143,
    dayCondition: "Mist",
    nightCondition: "Mist",
    dayFileName:"misty-day.json",
    nightFileName:"misty-night.json"
  },
  {
    code: 176,
    dayCondition: "Patchy rain possible",
    nightCondition: "Patchy rain possible",
    dayFileName:"patchy-day.json",
    nightFileName:"patchy-night.json"
  },
  {
    code: 179,
    dayCondition: "Patchy snow possible",
    nightCondition: "Patchy snow possible",
    dayFileName:"snowy-day.json",
    nightFileName:"snowy-night.json"
  },
  {
    code: 182,
    dayCondition: "Patchy sleet possible",
    nightCondition: "Patchy sleet possible",
    dayFileName:"snowy-day.json",
    nightFileName:"snowy-night.json"
  },
  {
    code: 185,
    dayCondition: "Patchy freezing drizzle possible",
    nightCondition: "Patchy freezing drizzle possible",
    dayFileName:"patchy-day.json",
    nightFileName:"patchy-night.json"
  },
  {
    code: 200,
    dayCondition: "Thundery outbreaks possible",
    nightCondition: "Thundery outbreaks possible",
    dayFileName:"thunderstorm-day.json",
    nightFileName:"thunderstorm-night.json"
  },
  {
    code: 227,
    dayCondition: "Blowing snow",
    nightCondition: "Blowing snow",
    dayFileName:"snowy-day.json",
    nightFileName:"snowy-night.json"
  },
  {
    code: 230,
    dayCondition: "Blizzard",
    nightCondition: "Blizzard",
    dayFileName:"snowy-day.json",
    nightFileName:"snowy-night.json"
  },
  {
    code: 248,
    dayCondition: "Fog",
    nightCondition: "Fog",
    dayFileName:"misty-day.json",
    nightFileName:"misty-night.json"
  },
  {
    code: 260,
    dayCondition: "Freezing fog",
    nightCondition: "Freezing fog",
    dayFileName:"misty-day.json",
    nightFileName:"misty-night.json"
  },
  {
    code: 263,
    dayCondition: "Patchy light drizzle",
    nightCondition: "Patchy light drizzle",
    dayFileName:"party-rainy-day.json",
    nightFileName:"party-rainy-night.json"
  },
  {
    code: 266,
    dayCondition: "Light drizzle",
    nightCondition: "Light drizzle",
    dayFileName:"party-rainy-day.json",
    nightFileName:"party-rainy-night.json"
  },
  {
    code: 281,
    dayCondition: "Freezing drizzle",
    nightCondition: "Freezing drizzle",
    dayFileName:"party-rainy-day.json",
    nightFileName:"party-rainy-night.json"
  },
  {
    code: 284,
    dayCondition: "Heavy freezing drizzle",
    nightCondition: "Heavy freezing drizzle",
    dayFileName:"party-rainy-day.json",
    nightFileName:"party-rainy-night.json"
  },
  {
    code: 293,
    dayCondition: "Patchy light rain",
    nightCondition: "Patchy light rain",
    dayFileName:"party-rainy-day.json",
    nightFileName:"party-rainy-night.json"
  },
  {
    code: 296,
    dayCondition: "Light rain",
    nightCondition: "Light rain",
    dayFileName:"party-rainy-day.json",
    nightFileName:"party-rainy-night.json"
  },
  {
    code: 299,
    dayCondition: "Moderate rain at times",
    nightCondition: "Moderate rain at times",
    dayFileName:"party-rainy-day.json",
    nightFileName:"party-rainy-night.json"
  },
  {
    code: 302,
    dayCondition: "Moderate rain",
    nightCondition: "Moderate rain",
    dayFileName:"party-rainy-day.json",
    nightFileName:"party-rainy-night.json"
  },
  {
    code: 305,
    dayCondition: "Heavy rain at times",
    nightCondition: "Heavy rain at times",
    dayFileName:"thunderstorm-day.json",
    nightFileName:"thunderstorm-night.json"
  },
  {
    code: 308,
    dayCondition: "Heavy rain",
    nightCondition: "Heavy rain",
    dayFileName:"thunderstorm-day.json",
    nightFileName:"thunderstorm-night.json"
  },
  {
    code: 311,
    dayCondition: "Light freezing rain",
    nightCondition: "Light freezing rain",
    dayFileName:"party-rainy-day.json",
    nightFileName:"party-rainy-night.json"
  },
];
