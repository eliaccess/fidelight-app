export declare global {
  interface ICityItem {
    cityName: string;
  }
  interface ISelectedCityItem {
    cityName: string;
  }

  interface ICitiesAPIResponse {
    data?: ICityItem[];
  }
}
