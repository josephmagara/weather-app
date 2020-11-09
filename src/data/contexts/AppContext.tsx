import React from "react";
import { WeatherReport } from "../../domain/weather/WeatherReport";
import { NavigationCellId } from "../../presentation/component/navigation/BottomNavigationComponent";
import {
  getWeatherForCity,
  weatherResponseToWeatherReport,
} from "../networking/WeatherGateway";
import getCoordinates from "../utils/LocationUtils";

export interface AppContextProtocol {
  isLoading: boolean;
  report?: WeatherReport;
  currentSelectedView: NavigationCellId;
  getWeatherFor: (city: string) => void;
  onNavigationCellSelected: (cellId: NavigationCellId) => void;
}

export const AppContext = React.createContext<AppContextProtocol>({
  isLoading: false,
  report: undefined,
  currentSelectedView: "current_weather",
  getWeatherFor: (city: string) => {
    console.log(city);
  },
  onNavigationCellSelected: (city: NavigationCellId) => {
    console.log(city);
  },
});

const { Provider } = AppContext;

export interface AppProviderProps {
  children: React.ReactNode;
  loadCurrentWeather: boolean;
  currentSelectedView: NavigationCellId;
  cityToQuery?: string;
  canAccessUsersCurrentLocation?: boolean;
}

interface AppState {
  isLoading: boolean;
  report?: WeatherReport;
  currentSelectedView: NavigationCellId;
  cityToQuery?: string;
  canAccessUsersCurrentLocation?: boolean;
}

const AppStateProvider: React.FC<AppProviderProps> = ({
  children,
  cityToQuery,
  loadCurrentWeather,
  currentSelectedView,
  canAccessUsersCurrentLocation,
}) => {
  const initialAppState: AppState = {
    cityToQuery: cityToQuery,
    isLoading: loadCurrentWeather,
    currentSelectedView: currentSelectedView,
    canAccessUsersCurrentLocation: canAccessUsersCurrentLocation,
  };

  const [appState, setAppState] = React.useState<AppState>(initialAppState);

  const handleRequestWeatherForCity = (city: string) => {
    const newState: AppState = {
      isLoading: true,
      cityToQuery: city,
      report: appState.report,
      currentSelectedView: "current_weather",
      canAccessUsersCurrentLocation: appState.canAccessUsersCurrentLocation,
    };
    setAppState(newState);
  };

  const handleonNavigationCellSelected = (cellId: NavigationCellId) => {
    const newState: AppState = {
      isLoading: true,
      cityToQuery: appState.cityToQuery,
      report: appState.report,
      currentSelectedView: appState.currentSelectedView,
      canAccessUsersCurrentLocation: appState.canAccessUsersCurrentLocation,
    };
    newState.currentSelectedView = cellId;
    newState.isLoading = true;
    setAppState(newState);
  };

  React.useEffect(() => {
    const {
      isLoading,
      cityToQuery,
      currentSelectedView,
      canAccessUsersCurrentLocation,
    } = appState;
    if (
      isLoading &&
      cityToQuery !== undefined &&
      canAccessUsersCurrentLocation !== undefined
    ) {
      getWeatherForCity(cityToQuery)
        .then((response) => {
          const weatherReport = weatherResponseToWeatherReport(response);
          const newAppState: AppState = {
            isLoading: false,
            report: weatherReport,
            cityToQuery: cityToQuery,
            currentSelectedView: currentSelectedView,
            canAccessUsersCurrentLocation: canAccessUsersCurrentLocation,
          };

          setAppState(newAppState);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  React.useEffect(() => {
    const { canAccessUsersCurrentLocation } = appState;
    if (canAccessUsersCurrentLocation === undefined) {
      getCoordinates()
        .then((currentLocation) => {
          let currentCity = cityToQuery;
          if (currentLocation !== undefined) {
            currentCity = currentLocation;
          }
          const newAppState: AppState = {
            isLoading: appState.isLoading,
            report: appState.report,
            cityToQuery: currentCity,
            currentSelectedView: appState.currentSelectedView,
            canAccessUsersCurrentLocation: true,
          };

          setAppState(newAppState);
        })
        .catch((_error) => {
          const newAppState: AppState = {
            isLoading: appState.isLoading,
            report: appState.report,
            cityToQuery: appState.cityToQuery,
            currentSelectedView: appState.currentSelectedView,
            canAccessUsersCurrentLocation: false,
          };
          setAppState(newAppState);
        });
    }
  });

  const appContext: AppContextProtocol = {
    isLoading: appState.isLoading,
    report: appState?.report,
    currentSelectedView: appState.currentSelectedView,
    getWeatherFor: (city: string) => handleRequestWeatherForCity(city),
    onNavigationCellSelected: (cellId: NavigationCellId) =>
      handleonNavigationCellSelected(cellId),
  };

  return <Provider value={appContext}>{children}</Provider>;
};

export default AppStateProvider;
