"use client";

import SiteLayout from "@/components/custom/layout/site/SiteLayout";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Overview from "./Overview";
import Dictionary from "./Dictionary";
import Datatable from "./Datatable";
import API from "./API";
import { getDataset } from "@/services/endpoints/datasets";
import { useParams } from "next/navigation";
import { Spin } from "antd";

const page = () => {
  const { slug } = useParams();

  const tabs: {
    [key: string]: ({ dataset }: { dataset: any }) => React.JSX.Element;
  } = {
    overview: Overview,
    dictionary: Dictionary,
    datatable: Datatable,
    // api: API,
  };

  const [dataset, setDataset] = React.useState<any>(null);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const handleGetDataset = async () => {
    try {
      const response = await getDataset(slug as string);
      if (response.data) {
        setDataset(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoaded(true);
    }
  };

  React.useEffect(() => {
    handleGetDataset();
  }, []);

  return (
    <SiteLayout>
      {isLoaded ? (
        <div className="max-w-5xl w-full px-5 pb-5 flex flex-col gap-5">
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/open-data">Open Data</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dataset Name</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Tabs defaultValue="overview">
            <div className="flex items-center mb-5">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="dictionary">Dictionary</TabsTrigger>
                <TabsTrigger value="datatable">Data table</TabsTrigger>
                {/* <TabsTrigger value="api" className="hidden sm:flex">
                API
              </TabsTrigger> */}
              </TabsList>
            </div>
            {Object.keys(tabs).map((tab) => (
              <TabsContent key={tab} value={tab}>
                {React.createElement(tabs[tab], { dataset })}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}
    </SiteLayout>
  );
};

export default page;
