export interface WeatherReportResponse {
  request: {
    unit: string;
  };
  location: {
    name: string;
    country: string;
  };
  current: {
    temperature: number;
    weather_code: number;
    feelslike: number;
    weather_descriptions: string;
    is_day: boolean;
  };
}
