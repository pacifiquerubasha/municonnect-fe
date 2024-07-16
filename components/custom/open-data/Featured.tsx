import { formatFileSize } from "@/lib/utils";
import {
  ArrowUpRight,
  Download,
  DownloadIcon,
  LucideDownload,
} from "lucide-react";
import { Link } from "@/lib/router-events";
import React from "react";

const Featured = ({ datasets }: { datasets: any }) => {
  return (
    <div className="flex flex-col gap-5 max-w-5xl w-full mt-10">
      <h1 className="text-xl">Featured datasets</h1>
      <div className="grid gap-4 mt-2 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {datasets?.map((dataset: any, index: number) => (
          <div
            key={index}
            className="block border rounded-lg bg-white  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white"
          >
            <div className="border-b-2 text-sm border-neutral-100 px-2 py-3 dark:border-white/10">
              Featured
            </div>
            <div className="py-3 px-2">
              <h5 className="mb-2 font-medium leading-tight ">
                {dataset?.name}
              </h5>
              <p className="text-xs ">{dataset?.description}</p>
            </div>
            <div className="border-t-2 flex justify-between border-neutral-100 px-2 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300">
              <div className="flex gap-1 items-center">
                <Link href={dataset?.files?.mainFile} target="_blank">
                  <LucideDownload className="h-4 w-4" />
                </Link>
                <span className="text-xs">
                  {formatFileSize(dataset?.fileSize || 0)}
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
