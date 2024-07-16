"use client";

import SiteLayout from "@/components/custom/layout/site/SiteLayout";
import React, { useEffect, useRef, useState } from "react";
import { AutoComplete, Spin } from "antd";
import Stats from "@/components/custom/open-data/Stats";
import Categories from "@/components/custom/open-data/Categories";
import Featured from "@/components/custom/open-data/Featured";
import DatasetsList from "@/components/custom/open-data/DatasetsList";
import {
  getDatasetsStats,
  getPublicDatasets,
} from "@/services/endpoints/datasets";
import { useRouter } from "next/navigation";
import type { GetRef, TourProps } from "antd";
import { Button, Divider, Space, Tour } from "antd";

const page = () => {
  const [options, setOptions] = useState<{ value: string; id: string }[]>([]);
  const router = useRouter();

  const [publicDatasets, setPublicDatasets] = useState<any>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const handleGetPublicDatasets = async () => {
    try {
      const response = await getPublicDatasets();
      if (response.status === 200) {
        console.log(response.data.datasets);
        setPublicDatasets(response.data.datasets);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  const [stats, setStats] = useState<any>([]);
  const [isLoadedStats, setIsLoadedStats] = useState<boolean>(false);
  const handleGetStats = async () => {
    try {
      const response = await getDatasetsStats();
      if (response.status === 200) {
        console.log(response.data);
        setStats(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadedStats(true);
    }
  };

  const [open, setOpen] = useState<boolean>(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    handleGetStats();
    handleGetPublicDatasets();
  }, []);

  useEffect(() => {
    const tour = localStorage.getItem("muni__open-data-tour");
    if (isLoaded && isLoadedStats && !tour) {
      setOpen(true);
    }
  }, [isLoaded, isLoadedStats]);

  const getPanelValue = (searchText: string) => {
    return !searchText
      ? []
      : publicDatasets
          ?.filter(
            (dataset: any) =>
              dataset?.name.toLowerCase().includes(searchText.toLowerCase()) ||
              dataset?.description
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
              dataset?.domain.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((dataset: any) => ({
            value: dataset.name,
            id: dataset.id,
          }));
  };

  const onSelect = (value: string, option: { value: string; id: string }) => {
    router.push(`/open-data/${option.id}`);
  };

  const featured = publicDatasets?.filter((dataset: any) => dataset.featured);

  const steps: TourProps["steps"] = [
    {
      title: "Search Datasets",
      description:
        "Enter keywords to search for specific datasets available on the platform.",
      target: () => ref1.current!,
    },
    {
      title: "Platform Statistics",
      description:
        "See the overall statistics of the platform, including the number of uploaded datasets, downloads, user engagement, and conversations.",
      target: () => ref2.current!,
    },
    {
      title: "Top Categories",
      description:
        "View the most popular categories for datasets. Click on any category to explore datasets within that category.",
      target: () => ref3.current!,
    },
    {
      title: "Dataset Details",
      description:
        "View details about each dataset, including a description and options to view more information or download the dataset.",
      target: () => ref4.current!,
    },
  ];

  return (
    <SiteLayout>
      {isLoaded && isLoadedStats ? (
        <>
          <div className="flex flex-col mb-4 max-w-5xl py-24 border rounded-lg bg-slate-200 w-full justify-center items-center">
            <h1 className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] via-[#0085CA] to-[#EF3340]">Open Data Platform</h1>
            <p className="text-md mb-12">
              Explore our comprehensive list of datasets available for download
              and analysis.
            </p>
            <div ref={ref1} className="w-3/4">
              <AutoComplete
                options={options}
                onSelect={onSelect}
                onSearch={(text) => setOptions(getPanelValue(text))}
                placeholder="Enter keywords to search for specific datasets."
                className="w-full py-8 h-auto"
              />
            </div>
          </div>
          <Stats stats={stats?.statsArray} tourRef={ref2} />
          <Categories categories={stats?.topCategories} tourRef={ref3} />
          {featured?.length > 0 && <Featured datasets={featured} />}
          <DatasetsList
            datasets={publicDatasets}
            categories={stats?.allCategories}
            tourRef={ref4}
          />

          <Tour
            open={open}
            onClose={() => {
              localStorage.setItem("muni__open-data-tour", "true");
              setOpen(false)
            }}
            steps={steps}
            indicatorsRender={(current, total) => (
              <span>
                {current + 1} / {total}
              </span>
            )}
          />
        </>
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}
    </SiteLayout>
  );
};

export default page;
