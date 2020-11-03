export interface WeatherViewConfig {
  code: number;
  description: string;
  dayFile: string;
  nightFile: string;
  backgroundColor: string;
}

export const weatherTypeViewConfigs: Array<WeatherViewConfig> = [
  {
    code: 113,
    description: "Sunny",
    dayFile: require("../../data/lotties/clear-sky-day.json"),
    nightFile: require("../../data/lotties/clear-sky-night.json"),
    backgroundColor: "#FDF4D2"
  },
  {
    code: 116,
    description: "Partly cloudy",
    dayFile: require("../../data/lotties/partly-cloudy-day.json"),
    nightFile: require("../../data/lotties/partly-cloudy-night.json"),
    backgroundColor: "#C3E2F9"
  },
  {
    code: 119,
    description: "Cloudy",
    dayFile: require("../../data/lotties/cloudy-day.json"),
    nightFile: require("../../data/lotties/cloudy-night.json"),
    backgroundColor: "#EFF3F9"
  },
  {
    code: 122,
    description: "Overcast",
    dayFile: require("../../data/lotties/misty-day.json"),
    nightFile: require("../../data/lotties/misty-night.json"),
    backgroundColor: "#9FA7B5"
  },
  {
    code: 143,
    description: "Mist",
    dayFile: require("../../data/lotties/misty-day.json"),
    nightFile: require("../../data/lotties/misty-night.json"),
    backgroundColor: "#C0C6CF"
  },
  {
    code: 176,
    description: "Patchy rain possible",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
    backgroundColor: "#8390A2"
  },
  {
    code: 179,
    description: "Patchy snow possible",
    dayFile: require("../../data/lotties/snowy-day.json"),
    nightFile: require("../../data/lotties/snowy-night.json"),
    backgroundColor: "#DDEFFD"
  },
  {
    code: 182,
    description: "Patchy sleet possible",
    dayFile: require("../../data/lotties/snowy-day.json"),
    nightFile: require("../../data/lotties/snowy-night.json"),
    backgroundColor: "#DDEFFD"
  },
  {
    code: 185,
    description: "Patchy freezing drizzle possible",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
    backgroundColor: "#DDEFFD"
  },
  {
    code: 200,
    description: "Thundery outbreaks possible",
    dayFile: require("../../data/lotties/thunderstorm-day.json"),
    nightFile: require("../../data/lotties/thunderstorm-night.json"),
    backgroundColor: "#839FA9"
  },
  {
    code: 227,
    description: "Blowing snow",
    dayFile: require("../../data/lotties/snowy-day.json"),
    nightFile: require("../../data/lotties/snowy-night.json"),
    backgroundColor: "#2E4A92"
  },
  {
    code: 230,
    description: "Blizzard",
    dayFile: require("../../data/lotties/snowy-day.json"),
    nightFile: require("../../data/lotties/snowy-night.json"),
    backgroundColor: "#839FA9"
  },
  {
    code: 248,
    description: "Fog",
    dayFile: require("../../data/lotties/misty-day.json"),
    nightFile: require("../../data/lotties/misty-night.json"),
    backgroundColor: "#234A82" 
  },
  {
    code: 260,
    description: "Freezing fog",
    dayFile: require("../../data/lotties/misty-day.json"),
    nightFile: require("../../data/lotties/misty-night.json"), 
    backgroundColor: "#234A82" 
  },
  {
    code: 263,
    description: "Patchy light drizzle",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
    backgroundColor: "#6C9BD1" 
  },
  {
    code: 266,
    description: "Light drizzle",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
    backgroundColor: "#6C9BD1" 
  },
  {
    code: 281,
    description: "Freezing drizzle",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
    backgroundColor: "#6C9BD1" 
  },
  {
    code: 284,
    description: "Heavy freezing drizzle",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
    backgroundColor: "#203360" 
  },
  {
    code: 293,
    description: "Patchy light rain",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
    backgroundColor: "#6C9BD1" 
  },
  {
    code: 296,
    description: "Light rain",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
    backgroundColor: "#6C9BD1" 
  },
  {
    code: 299,
    description: "Moderate rain at times",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
    backgroundColor: "#203360" 
  },
  {
    code: 302,
    description: "Moderate rain",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
    backgroundColor: "#203360" 
  },
  {
    code: 305,
    description: "Heavy rain at times",
    dayFile: require("../../data/lotties/thunderstorm-day.json"),
    nightFile: require("../../data/lotties/thunderstorm-night.json"),
    backgroundColor: "#839FA9"
  },
  {
    code: 308,
    description: "Heavy rain",
    dayFile: require("../../data/lotties/thunderstorm-day.json"),
    nightFile: require("../../data/lotties/thunderstorm-night.json"),
    backgroundColor: "#839FA9"
  },
  {
    code: 311,
    description: "Light freezing rain",
    dayFile: require("../../data/lotties/patchy-rainy-day.json"),
    nightFile: require("../../data/lotties/patchy-rainy-night.json"),
    backgroundColor: "#6C9BD1" 
  },
];
