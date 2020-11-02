import React from "react";
import { WeatherReport } from "../../domain/weather/WeatherReport";
import { getWeatherForCity } from "../networking/WeatherGateway";

interface AppContextProtocol {
  isLoading: boolean;
  report?: WeatherReport;
  getWeatherFor: (city: string) => void;
}

export const AppContext = React.createContext<AppContextProtocol>({
  isLoading: false,
  report: undefined,
  getWeatherFor: (city: string) => {
    console.log(city);
  },
});

const { Provider } = AppContext;

export interface AppProviderProps {
  children: React.ReactNode;
  loadCurrentWeather: boolean;
  cityToQuery?: string;
}

interface AppState {
  isLoading: boolean;
  report?: WeatherReport;
  cityToQuery?: string;
}

const AppStateProvider: React.FC<AppProviderProps> = ({
  children,
  cityToQuery,
  loadCurrentWeather,
}) => {
  const initialAppState: AppState = {
    isLoading: loadCurrentWeather,
    cityToQuery: cityToQuery,
  };

  const [appState, setAppState] = React.useState<AppState>(initialAppState);

  const handleRequestWeatherForCity = (city: string) => {
    const newState: AppState = {
      isLoading: true,
      cityToQuery: city,
      report: appState?.report
    }

    setAppState(newState)
  };

  React.useEffect(() => {
    const {isLoading, cityToQuery } = appState
    if (isLoading && cityToQuery !== undefined) {
      getWeatherForCity(cityToQuery)
      .then((response) => {
        const { current } = response;
        const { country, name } = response.location;

        const weatherReport: WeatherReport = {
          code: current.weather_code,
          location: name + ", " + country,
          description: current.weather_descriptions,
          temperatureUnit: response.request.unit,
          actualTemperature: current.temperature,
          feltTemperature: current.feelslike,
          isDayTime: current.is_day,
        };

        const newAppState: AppState = {
          isLoading: false,
          report: weatherReport,
          cityToQuery: cityToQuery,
        };

        setAppState(newAppState);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  });

  const state: AppContextProtocol = {
    isLoading: appState.isLoading,
    report: appState?.report,
    getWeatherFor: (city: string) => handleRequestWeatherForCity(city),
  };

  return <Provider value={state}>{children}</Provider>;
};

export default AppStateProvider;
