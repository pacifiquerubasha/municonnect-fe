import { BaseCity } from "@/lib/types";
import { weatherIcons } from "@/lib/utils";
import { getCityWeather } from "@/services/endpoints/dashboard";
import Image from "next/image";
import React, { useEffect } from "react";
import SkeletonWrapper from "./SkeletonWrapper";

const Weather = ({ cityData, isLoaded }: { 
    cityData: any,
    isLoaded: boolean
 }) => {

  const convertMilliseconds = (milliseconds: number) => {
    const date = new Date(milliseconds * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
  };

  return (
    <SkeletonWrapper isLoaded={isLoaded}>
      <div className="flex flex-wrap">
        {Object.entries(cityData).map(([key, value]: any) => {
          return (
            <div
              key={key}
              className="w-32 md:mr-4 mb-10 transition duration-500 ease-in-out transform bg-white rounded-lg border flex flex-col justify-center items-center text-center p-4"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={weatherIcons[key]}
                  alt="weather"
                  width={100}
                  height={100}
                  className="w-16 h-16"
                />
              </div>
              <p className="text-sm text-gray-700 mb-2 capitalize">
                {key.split("_").join(" ")}
              </p>
              <div className="text-xl font-bold text-gray-900">
                {key.includes("sun") ? convertMilliseconds(value) : value}
              </div>
            </div>
          );
        })}
      </div>
    </SkeletonWrapper>
  );
};

export default Weather;
