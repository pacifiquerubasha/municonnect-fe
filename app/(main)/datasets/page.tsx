"use client";

import Link from "next/link";
import { File, ListFilter, PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Aside from "@/components/custom/layout/app/Aside";
import Header from "@/components/custom/layout/app/Header";
import DatasetDetails from "@/components/custom/datasets/DatasetDetails";
import DatasetsTable from "@/components/custom/datasets/DatasetsTable";
import { useUser } from "@clerk/nextjs";
import { getMyDatasets } from "@/services/endpoints/datasets";
import { useEffect, useState } from "react";

export function Datasets() {
  const { user, isLoaded, isSignedIn  } = useUser();

  const [datasets, setDatasets] = useState([]);
  const handleGetMyDatasets = async () => {
    try {
      console.log("USER", user, isLoaded, isSignedIn)
      const response = await getMyDatasets(user?.id as string);
      if (response.data) {
        setDatasets(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(isSignedIn && isLoaded)
    handleGetMyDatasets();
  }, [isLoaded, isSignedIn]);

  const breadcrumbs = [
    {
      href: "/overview",
      title: "Overview",
    },
    {
      href: "",
      title: "Datasets",
    },
  ];

  const [selectedDataset, setSelectedDataset] = useState(null);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Aside />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header breadcrumbs={breadcrumbs} />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="lg:col-span-2">
            <Tabs defaultValue="all">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="draft">Draft</TabsTrigger>
                  <TabsTrigger value="archived" className="hidden sm:flex">
                    Archived
                  </TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-7 gap-1">
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Filter
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Active
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Archived
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button size="sm" variant="outline" className="h-7 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Export
                    </span>
                  </Button>
                  <Button size="sm" className="h-7 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <Link href={"/datasets/add"}>
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add Dataset
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
              <TabsContent value="all">
                <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle>Datasets</CardTitle>
                    <CardDescription>
                      Explore and manage your datasets
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DatasetsTable datasets={datasets} setSelectedDataset={setSelectedDataset}/>
                  </CardContent>
                  
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <DatasetDetails selectedDataset={selectedDataset}/>
        </main>
      </div>
    </div>
  );
}

export default Datasets;
