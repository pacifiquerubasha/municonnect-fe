"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatFileSize } from "@/lib/utils";
import { increaseDownloads } from "@/services/endpoints/datasets";
import { ArrowUpRight, FileSpreadsheetIcon, ListFilter } from "lucide-react";
import { Link } from "@/lib/router-events";
import React, { useEffect, useState } from "react";

const DatasetsList = ({
  datasets,
  categories,
  tourRef,
}: {
  datasets: any[];
  categories: any;
  tourRef: any;
}) => {
  const [datasetsToShow, setDatasetsToShow] = useState<any[]>(datasets);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    if (filter === "All") {
      setDatasetsToShow(datasets);
    } else {
      setDatasetsToShow(
        datasets.filter((dataset: any) => dataset?.domain === filter)
      );
    }
  }, [filter]);

  return (
    <div className="flex flex-col gap-5 max-w-5xl w-full mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Datasets</h1>
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
            <DropdownMenuCheckboxItem
              checked={filter === "All"}
              onClick={() => setFilter("All")}
            >
              All
            </DropdownMenuCheckboxItem>
            {categories?.map((category: any, index: number) => (
              <DropdownMenuCheckboxItem
                key={index}
                className="capitalize"
                checked={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {datasetsToShow?.map((dataset: any, index: any) => (
          <div className="flex justify-between items-center gap-5 p-2 rounded-md border">
            <div className="flex gap-2 items-center">
              <FileSpreadsheetIcon />
              <div className="flex flex-col text-xs">
                <h5 className="font-semibold leading-tight">{dataset?.name}</h5>
                <p className="text-xs">{dataset?.description}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button ref={tourRef} asChild size="sm" className="gap-1">
                <Link href={`/open-data/${dataset?._id}`}>
                  View More
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link href={dataset?.files?.mainFile} target="_blank">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="gap-1"
                  onClick={() => increaseDownloads(dataset?._id)}
                >
                  <span>Download {formatFileSize(dataset?.fileSize || 0)}</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatasetsList;
