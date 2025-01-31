"use client";

import { Link } from "@/lib/router-events";
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
import { getAllDatasets, getMyDatasets } from "@/services/endpoints/datasets";
import { useContext, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { AppContext } from "@/providers/ContextProvider";

export function Datasets() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { currentUser } = useContext(AppContext);

  const [selectedDataset, setSelectedDataset] = useState(null);

  const [datasets, setDatasets] = useState([]);
  const [isLoadedDataset, setIsLoadedDatasets] = useState(false);
  const handleGetMyDatasets = async () => {
    try {
      setIsLoadedDatasets(false);
      const response = await getMyDatasets(user?.id as string);
      if (response.data) {
        setDatasets(response.data);
        setSelectedDataset(null);
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadedDatasets(true);
    }
  };

  const handleAllDatasets = async () => {
    try {
      setIsLoadedDatasets(false);
      const response = await getAllDatasets(user?.id as string);
      if (response.data) {
        setDatasets(response.data);
        setSelectedDataset(null);
        console.log("ALL", response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadedDatasets(true);
    }
  };

  const [shouldRefresh, setShouldRefresh] = useState(false);
  useEffect(() => {
    if (isSignedIn && isLoaded) {
      if (currentUser?.role === "admin") {
        handleAllDatasets();
      } else {
        handleGetMyDatasets();
      }
    }
  }, [isLoaded, isSignedIn, shouldRefresh]);

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

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="lg:col-span-2">
        <Tabs defaultValue="all">
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <CardTitle className="text-[#0085CA]">Datasets</CardTitle>
                    <CardDescription>
                      Explore and manage your datasets
                    </CardDescription>
                  </div>
                  <Button size="sm" className="h-7 gap-1 bg-[#0085CA]">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <Link href={"/datasets/add"}>
                      <span className="sr-only  sm:not-sr-only sm:whitespace-nowrap">
                        Add Dataset
                      </span>
                    </Link>
                  </Button>
                </div>
              </CardHeader>

              <CardContent>
                <DatasetsTable
                  datasets={datasets}
                  setSelectedDataset={setSelectedDataset}
                  setShouldRefresh={setShouldRefresh}
                />
                {!isLoadedDataset ? (
                  <>
                    {new Array(5).fill(0).map((_, i) => (
                      <Skeleton className="h-8 w-full mt-2" />
                    ))}
                  </>
                ) : (
                  <>
                    {datasets?.length === 0 && (
                      <div className="flex justify-center items-center h-40">
                        <p className="text-lg">No datasets found</p>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <DatasetDetails
        selectedDataset={selectedDataset}
        setShouldRefresh={setShouldRefresh}
      />
    </main>
  );
}

export default Datasets;
