import {
  ArrowUpRight,
  Download,
  DownloadIcon,
  LucideDownload,
} from "lucide-react";
import React from "react";

const Featured = () => {
  return (
    <div className="flex flex-col gap-5 max-w-5xl w-full mt-10">
      <h1 className="text-xl">Featured datasets</h1>
      <div className="grid gap-4 mt-2 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {new Array(4).fill(0).map((_, index) => (
          <div className="block border rounded-lg bg-white  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="border-b-2 text-sm border-neutral-100 px-2 py-3 dark:border-white/10">
              Featured
            </div>
            <div className="py-3 px-2">
              <h5 className="mb-2 font-medium leading-tight ">
                Special title treatment
              </h5>
              <p className="text-xs ">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div className="border-t-2 flex justify-between border-neutral-100 px-2 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300">
              <div className="flex gap-1 items-center">
                <LucideDownload className="h-4 w-4" />
                <span className="text-xs">15kb</span>
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
