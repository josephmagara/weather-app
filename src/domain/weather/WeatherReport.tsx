export interface WeatherReport {
  code: number;
  location: string;
  description: string;
  temperatureUnit: string;
  actualTemperature: number;
  feltTemperature: number;
  isDayTime: boolean;
}
