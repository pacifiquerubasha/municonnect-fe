"use client";

import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface DataType {
  key: React.Key;
  field: string;
  type: string;
}

const Dictionary = ({ dataset }: { dataset: any }) => {
  const columns: TableColumnsType<DataType> = [
    {
      title: "Field",
      dataIndex: "field",
      width: "30%",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
  ];
  const data: DataType[] = dataset?.fields.map((field: any, index: number) => ({
    key: field._id,
    field: field.name,
    type: field.type,
  }));

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="inter">
      <Table columns={columns} dataSource={data} onChange={onChange}/>
    </div>
  );
};

export default Dictionary;
