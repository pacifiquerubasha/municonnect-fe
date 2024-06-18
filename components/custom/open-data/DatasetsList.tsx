import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowUpRight, FileSpreadsheetIcon, ListFilter } from "lucide-react";
import Link from "next/link";
import React from "react";

const DatasetsList = () => {
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
            <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {new Array(10).fill(0).map((_, index) => (
          <div className="flex justify-between items-center gap-5 p-2 rounded-md border">
            <div className="flex gap-2 items-center">
              <FileSpreadsheetIcon />
              <div className="flex flex-col text-xs">
                <h5 className="font-semibold leading-tight">
                  Special title treatment
                </h5>
                <p className="text-xs">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button asChild size="sm" className="gap-1">
                <Link href="/open-data/482942br3i2r89u2d84f42984">
                  View More
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="gap-1">
                <span>Download 2.5Mb</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatasetsList;
