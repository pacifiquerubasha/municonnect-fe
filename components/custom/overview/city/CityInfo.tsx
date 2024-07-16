"use client";

import { Tag } from "antd";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo } from "react";
import SkeletonWrapper from "./SkeletonWrapper";
import { formatNumber } from "@/lib/utils";

const CityInfo = ({
  cityData,
  isLoaded,
}: {
  cityData: any;
  isLoaded: boolean;
}) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("./Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <SkeletonWrapper isLoaded={isLoaded}>
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{cityData.name}</span>
            {cityData.is_capital && <Tag color="processing">CAPITAL</Tag>}
          </div>
          <div className="flex gap-2">
            <div className="font-semibold">Population</div>
            <div className="text-muted-foreground">
              {formatNumber(cityData.population)}
            </div>
          </div>
        </div>
        <Map
          position={[cityData.latitude, cityData.longitude]}
          zoom={25}
          name={cityData.name}
        />
      </SkeletonWrapper>
    </div>
  );
};

export default CityInfo;
