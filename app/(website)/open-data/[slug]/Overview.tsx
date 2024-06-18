import { Tag } from "antd";
import { Building2, FileCog, Scale, ShieldPlus } from "lucide-react";
import React from "react";

const Overview = () => {
  const tags = [
    "Money Supply",
    "Central Bank",
    "UAE",
    "Economy",
    "Currency",
    "Deposits",
  ];
  return (
    <div>
      <h1 className="text-2xl">Money Supply in the United Arab Emirates</h1>
      <div className="flex gap-5 items-center mt-4">
        <div className="flex gap-1 items-center text-xs">
          <Building2 width={12} height={12} />
          <span>Central Bank of the UAE</span>
        </div>
        <div className="flex gap-1 items-center text-xs">
          <ShieldPlus width={12} height={12} />
          <span>Released 10/09/2020</span>
        </div>
        <div className="flex gap-1 items-center text-xs">
          <FileCog width={12} height={12} />
          <span>Last Modified 10/09/2025</span>
        </div>
        <div className="flex gap-1 items-center text-xs">
          <Scale width={12} height={12} />
          <span>MIT</span>
        </div>
      </div>
      <div className="my-10">
        <h3>Description</h3>
        <p className="mt-2 text-sm">
          The dataset shows the money available in the domestic economy in the
          United Arab Emirates, consisting of currency in circulation outside
          banks plus the resident deposits (Demand, Current, Savings, and Term
          Deposits) in Dirham and Foreign Currency in the economy from 2010 to
          2023.
        </p>
        <div className="flex flex-wrap mt-5">
          {tags.map((tag) => (
            <Tag color="default">{tag}</Tag>
          ))}
        </div>
      </div>
      <div className="my-5">
        <h3>Area Covered</h3>
        <p className="mt-2 text-sm">
          The dataset covers the United Arab Emirates and its economy.
        </p>
      </div>
      <div className="my-5">
        <h3>About CBUAE</h3>
        <p className="mt-2 text-sm">
          The Central Bank of the United Arab Emirates (CBUAE) was established
          in 1980 and is the primary financial regulatory authority in the UAE.
          It is responsible for issuing the national currency, the UAE Dirham,
          and managing the country's monetary policy.
        </p>
      </div>
    </div>
  );
};

export default Overview;
