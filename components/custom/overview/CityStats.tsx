"use client";

import * as React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cities, copyTextToClipboard } from "@/lib/utils";
import { CitiesSelect } from "./ComboBox";
import AirQuality from "./city/AirQuality";
import CityInfo from "./city/CityInfo";
import Weather from "./city/Weather";
import {
    getAirQuality,
  getCityInfo,
  getCityWeather,
} from "@/services/endpoints/dashboard";

const CityStats = () => {
  const citiesOptions = cities.map((city) => ({
    value: city.city,
    label: city.city,
  }));
  //   const [selectedCity, setSelectedCity] = React.useState<BaseCity | null>(null);
  const [selectValue, setSelectValue] = React.useState<string>("Kinshasa");

  const selectedCity = React.useMemo(() => {
    return cities.find((city) => city.city === selectValue) || null;
  }, [selectValue]);

  const [cityDataAir, setCityDataAir] = React.useState<any>({});
  const [isLoadedAir, setIsLoadedAir] = React.useState<boolean>(false);
  const handleGetCityAirQuality = async (city: string) => {
    try {
      setIsLoadedAir(false);
      const response = await getAirQuality(city);
      if (response.data) {
        setCityDataAir(response.data);

        console.log("CITY AIR", response.data);
      }
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setIsLoadedAir(true);
    }
  };

  const [cityDataInfo, setCityDataInfo] = React.useState<any>({});
  const [isLoadedInfo, setIsLoadedInfo] = React.useState<boolean>(false);
  const handleGetCityInfo = async (city: string) => {
    try {
      setIsLoadedInfo(false);
      const response = await getCityInfo(city);
      if (response.data) {
        setCityDataInfo(response.data[0]);
        console.log("CITY INFO", response.data);
      }
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setIsLoadedInfo(true);
    }
  };

  const [cityDataWeather, setCityDataWeather] = React.useState<any>({});
  const [isLoadedWeather, setIsLoadedWeather] = React.useState<boolean>(false);
  const handleGetCityWeather = async (lat: number, lon: number) => {
    try {
      setIsLoadedWeather(false);
      const response = await getCityWeather(lat, lon);
      if (response.data) {
        setCityDataWeather(response.data);
        console.log("CITY WEATHER", response.data);
      }
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setIsLoadedWeather(true);
    }
  };

  React.useEffect(() => {
    // if (selectedCity) {
    //   handleGetCityAirQuality(selectedCity.city);
    //   handleGetCityInfo(selectedCity.city);
    //   handleGetCityWeather(selectedCity.latitude, selectedCity.longitude);
    // }
  }, [selectedCity]);

  return (
    <Tabs defaultValue="City Info">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="City Info">City Info</TabsTrigger>
          <TabsTrigger value="Air Quality">Air Quality</TabsTrigger>
          <TabsTrigger value="Weather">Weather</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <CitiesSelect
            options={citiesOptions}
            value={selectValue}
            setValue={setSelectValue}
          />
        </div>
      </div>
      <TabsContent value="City Info">
        <CityInfo cityData={cityDataInfo} isLoaded={isLoadedInfo} />
      </TabsContent>
      <TabsContent value="Air Quality">
        <AirQuality cityData={cityDataAir} isLoaded={isLoadedAir} />
      </TabsContent>
      <TabsContent value="Weather">
        <Weather cityData={cityDataWeather} isLoaded={isLoadedWeather} />
      </TabsContent>
    </Tabs>
  );
};

export default CityStats;
