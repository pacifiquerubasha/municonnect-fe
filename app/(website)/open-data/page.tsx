'use client'

import SiteLayout from "@/components/custom/layout/site/SiteLayout";
import React, { useState } from "react";
import { AutoComplete } from "antd";
import Stats from "@/components/custom/open-data/Stats";
import Categories from "@/components/custom/open-data/Categories";
import Featured from "@/components/custom/open-data/Featured";
import DatasetsList from "@/components/custom/open-data/DatasetsList";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const page = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  return (
    <SiteLayout>
      <div className="flex flex-col mb-4 max-w-5xl py-24 border rounded-lg bg-slate-200 w-full justify-center items-center">
        <h1 className="text-3xl font-bold mb-1">Open Data Platform</h1>
        <p className="text-md mb-12">Explore our comprehensive list of datasets available for download and analysis.</p>
        <AutoComplete
          options={options}
          onSelect={onSelect}
          onSearch={(text) => setOptions(getPanelValue(text))}
          placeholder="Enter keywords to search for specific datasets."
          className="w-3/4 py-8 h-auto"
        />
      </div>
      <Stats/>
      <Categories/>
      <Featured/>
      <DatasetsList/>
    </SiteLayout>
  );
};

export default page;
