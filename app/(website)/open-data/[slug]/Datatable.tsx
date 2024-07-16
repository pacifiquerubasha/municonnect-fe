"use client";

import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Table, TableColumnsType } from "antd";
import Stats from "@/components/custom/open-data/details/Stats";
import { BookOpen, FileSpreadsheetIcon, Quote, Share2 } from "lucide-react";
import { Rate } from "antd";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import axios from "axios";
import * as XLSX from "xlsx";
import {
  convertToDataSource,
  copyTextToClipboard,
  formatFileSize,
  generateHarvardCitation,
} from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addRating, increaseDownloads } from "@/services/endpoints/datasets";
import { Link } from "@/lib/router-events";

const Datatable = ({ dataset }: { dataset: any }) => {
  const [csvData, setCsvData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const columns: TableColumnsType<any> =
    csvData.length > 0
      ? Object.keys(csvData[0]).map((key) => ({
          title: key,
          dataIndex: key,
        }))
      : [];

  const [excelData, setExcelData] = useState<any | null>(null);
  const [loadingExcel, setLoadingExcel] = useState<boolean>(false);

  const isCsv = dataset.files.mainFile.includes(".csv");

  useEffect(() => {
    const handleFetchFromUrl = async (): Promise<void> => {
      try {
        setLoadingExcel(true);
        const url = dataset?.files?.mainFile;
        const response = await axios.get(url, {
          responseType: "arraybuffer",
          headers: {
            Origin: window.location.origin,
          },
          withCredentials: false,
        });

        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, { type: "array", sheetRows: 11 });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData: any[][] = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
        });
        const convertedData = convertToDataSource(jsonData);

        setExcelData(convertedData);
      } catch (error) {
        console.error("Error fetching or parsing Excel file:", error);
      } finally {
        setLoadingExcel(false);
      }
    };

    const fetchData = async () => {
      try {
        setLoading(true);
        const data: any[] = [];
        await Papa.parse(dataset?.files?.mainFile, {
          download: true,
          header: true,
          worker: true,
          step: function (results) {
            data.push(results.data);
          },
          complete: function () {
            setCsvData(data);
            setLoading(false);
            console.log("All done!", data);
          },
        });
      } catch (error) {
        console.error("Error fetching CSV data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (dataset.files.mainFile.includes(".csv")) {
      fetchData();
    } else {
      handleFetchFromUrl();
    }

    fetchData();
  }, [dataset]);

  const data: any[] = csvData.map((row, index) => ({ key: index, ...row }));

  return (
    <div className="flex flex-col gap-5">
      <Stats dataset={dataset} />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl text-[#0085CA]">Main Data table</h1>
        <div className="flex justify-between items-center gap-5 my-4">
          <div className="flex gap-5 items-center text-sm">
            <Popover>
              <PopoverTrigger
                onClick={() => copyTextToClipboard(window.location.href)}
              >
                <div className="flex items-center gap-2 text-[#EF3340]">
                  Share: <Share2 width={15} />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[5rem] p-[0.5rem]">
                Copied
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer text-[#0085CA]">
                  Cite: <Quote width={15} />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-96">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">
                      Dataset Citation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Use this citation when referencing this dataset.
                    </p>
                  </div>

                  <Textarea
                    id="cite"
                    defaultValue={generateHarvardCitation(dataset)}
                    rows={10}
                    className="w-full col-span-2"
                    readOnly
                  />
                </div>
              </PopoverContent>
            </Popover>

            <div className="flex items-center gap-2">
              Rate:{" "}
              <Rate
                allowHalf
                defaultValue={dataset?.averageRating}
                onChange={(value) => addRating(dataset?._id, value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <span>{dataset?.numRows} rows</span> |{" "}
            <span>{dataset?.numColumns} columns</span>{" "}
            <Link href={dataset?.files?.mainFile} target="_blank">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="gap-1"
                onClick={() => increaseDownloads(dataset?._id)}
              >
                <span>Download {formatFileSize(dataset?.fileSize)}</span>
              </Button>
            </Link>
          </div>
        </div>
        <Table
          columns={isCsv ? columns : excelData?.columns}
          dataSource={isCsv ? data : excelData?.dataSource}
          loading={isCsv ? loading : loadingExcel}
          scroll={{ y: 500 }}
          size="small"
          bordered
        />
      </div>
      {/* <div className="flex flex-col gap-4">
        <h3 className="text-xl">Associated files</h3>
        <div className="flex flex-col gap-2">
          <h5>Datasets</h5>
          <div className="flex gap-5 items-center">
            {new Array(3).fill(0).map((_, index) => (
              <div className="flex items-center gap-2 p-2 rounded-md border">
                <FileSpreadsheetIcon />
                <div className="flex flex-col">
                  <div className="text-xs font-bold">
                    Financial Dataset {index + 1}
                  </div>
                  <div className="text-2xs">5Kb</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h5>Articles</h5>
          <div className="flex gap-5 items-center">
            {new Array(1).fill(0).map((_, index) => (
              <div className="flex items-center gap-2 p-2 rounded-md border">
                <BookOpen />
                <div className="flex flex-col">
                  <div className="text-xs font-bold">
                    Financial Dataset {index + 1}
                  </div>
                  <div className="text-2xs">5Kb</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Datatable;
