import Geolocation from "@react-native-community/geolocation";
import { PermissionsAndroid, Platform } from "react-native";

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

const getCoordinates = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    requestPermission()
      .then((ok) => {
        const options =
          Platform.OS === "android"
            ? { enableHighAccuracy: false, timeout: 5000 }
            : { enableHighAccuracy: false, timeout: 5000, maximumAge: 2000 };
        Geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const locationToPublish = `${lat},${long}`;
            resolve(locationToPublish);
          },
          (error) => {
            alert(error.message);
            reject(error);
          },
          options
        );
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getCoordinates;
