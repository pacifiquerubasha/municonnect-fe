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

const page = () => {
  const tabs: { [key: string]: () => React.JSX.Element } = {
    overview: Overview,
    dictionary: Dictionary,
    datatable: Datatable,
    // api: API,
  };
  return (
    <SiteLayout>
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
              {React.createElement(tabs[tab])}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </SiteLayout>
  );
};

export default page;
