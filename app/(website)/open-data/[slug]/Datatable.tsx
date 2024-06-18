"use client";

import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Table, TableColumnsType } from "antd";
import Stats from "@/components/custom/open-data/details/Stats";
import { BookOpen, FileSpreadsheetIcon, Quote, Share2 } from "lucide-react";
import { Rate } from "antd";
import { Button } from "@/components/ui/button";

const Datatable = () => {
  const [csvData, setCsvData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data: any[] = [];
        await Papa.parse(
          "https://raw.githubusercontent.com/datasets/covid-19/main/data/countries-aggregated.csv",
          {
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
          }
        );
      } catch (error) {
        console.error("Error fetching CSV data:", error);
      }
    };

    fetchData();
  }, []);

  const columns: TableColumnsType<any> =
    csvData.length > 0
      ? Object.keys(csvData[0]).map((key) => ({
          title: key,
          dataIndex: key,
        }))
      : [];

  const data: any[] = csvData.map((row, index) => ({ key: index, ...row }));

  return (
    <div className="flex flex-col gap-5">
      <Stats />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Main Data table</h1>
        <div className="flex justify-between items-center gap-5 my-4">
          <div className="flex gap-5 items-center text-sm">
            <div className="flex items-center gap-2">
              Share: <Share2 width={15} />
            </div>
            <div className="flex items-center gap-2">
              Cite: <Quote width={15} />
            </div>
            <div className="flex items-center gap-2">
              Rate: <Rate allowHalf defaultValue={2.5} />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <span>10 rows</span> | <span>5 columns</span> {" "}
            <Button asChild size="sm" variant="outline" className="gap-1">
              <span>Download 2.5Mb</span>
            </Button>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          scroll={{ y: 240 }}
          size="small"
          bordered
        />
      </div>
      <div className="flex flex-col gap-4">
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
      </div>
    </div>
  );
};

export default Datatable;
