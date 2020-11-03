import Geolocation from "@react-native-community/geolocation";
import axios from "axios";
import { PermissionsAndroid, Platform } from "react-native";
import { GOOGLE_MAPS_API_KEY } from "../../../env";

export interface CurrentLocation {
  city: string
  country: string
}

const requestPermission = (): Promise<boolean> => {
  if (Platform.OS === "ios") return Promise.resolve(true);
  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: "Location Permissions Needed",
      message: "This app requires your location in order to proceed",
      buttonPositive: "Grant Location",
    }
  ).then((granted) => {
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return Promise.resolve(true);
    } else {
      return Promise.reject(false);
    }
  });
};

const getCoordinates = () => {
  return requestPermission().then((ok) => {
    return new Promise((resolve, reject) => {
      const options =
        Platform.OS === "android"
          ? { enableHighAccuracy: true, timeout: 5000 }
          : { enableHighAccuracy: true, timeout: 5000, maximumAge: 2000 };
          global.navigator.geolocation
      global.navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  });
};

const locationToAddress = (latitdue: number, longtitude: number): Promise<CurrentLocation> => {
  const locationToPublish = `${latitdue},${longtitude}`
  const url = `https://maps.googleapis.com/mapps/api/geocode/json?latlng-${locationToPublish}&sensor=true&key=${GOOGLE_MAPS_API_KEY}`

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((result) => {
        
      })
      .catch((error) => {
        reject(error);
      });
  })
  
} 

export default getCoordinates;
