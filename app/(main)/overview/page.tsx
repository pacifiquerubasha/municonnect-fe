"use client";

import * as React from "react";
import { useUser } from "@clerk/nextjs";
import { Flex } from "antd";
import { copyTextToClipboard } from "@/lib/utils";
import { AppContext } from "@/providers/ContextProvider";
import Stats from "@/components/custom/overview/Stats";
import Country from "@/components/custom/overview/CountryStats";
import ApiKey from "@/components/custom/overview/ApiKey";
import CityStats from "@/components/custom/overview/CityStats";
import Holidays from "@/components/custom/overview/Holidays";

export function Dashboard() {
  const { currentUser } = React.useContext(AppContext);
  const breadcrumbs = [
    {
      href: "/overview",
      title: "Dashboard",
    },
  ];

  const { user } = useUser();
  React.useEffect(() => {
    console.log(currentUser);
  }, []);



  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Stats/>
        <CityStats/>
        <Holidays/>
      </div>
      <div className="flex flex-col items-start gap-4 md:gap-8">
        <ApiKey/>
        <Country/>
      </div>
    </main>
  );
}

export default Dashboard;
