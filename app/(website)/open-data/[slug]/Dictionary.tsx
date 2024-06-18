'use client'

import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface DataType {
    key: React.Key;
    field: string;
    type: string;
    description: string;
}

const Dictionary = () => {
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
    {
      title: "Description",
      dataIndex: "description",      
      width: "40%",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      field: "Name",
      type: "string",
      description: "Name of the person",
    },
    {
      key: "2",
      field: "Age",
      type: "number",
      description: "Age of the person",
    },
    {
      key: "3",
      field: "Address",
      type: "string",
      description: "Address of the person",
      
    },
  ];

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
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default Dictionary;
