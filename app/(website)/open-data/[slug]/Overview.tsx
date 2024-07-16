import { Tag } from "antd";
import { Building2, CircleCheck, FileCog, Scale, ShieldPlus } from "lucide-react";
import React from "react";

const Overview = ({ dataset }: { dataset: any }) => {

  return (
    <div>
      <h1 className="text-2xl text-[#0085CA]">{dataset?.name}</h1>
      <div className="flex gap-5 items-center mt-4">
        <div className="flex gap-1 items-center text-xs">
          <Building2 width={12} height={12} />
          <span>{dataset?.owner?.fullName}</span>
          {dataset?.owner?.isVerified && <CircleCheck color="#207ef8" strokeWidth={3} size={14}/>}
        </div>
        <div className="flex gap-1 items-center text-xs">
          <ShieldPlus width={12} height={12} />
          <span>Released {dataset?.releaseDate?.split("T")[0]}</span>
        </div>
        <div className="flex gap-1 items-center text-xs">
          <FileCog width={12} height={12} />
          <span>Last Modified {dataset?.lastModified?.split("T")[0]}</span>
        </div>
        <div className="flex gap-1 items-center text-xs">
          <Scale width={12} height={12} />
          <span>{dataset?.licence}</span>
        </div>
      </div>
      <div className="my-10">
        <h3 className="opacity-[70%]">Description</h3>
        <p className="mt-2 text-sm">{dataset?.description}</p>
        <div className="flex flex-wrap mt-5">
          {dataset?.tags.map((tag: string, index: number) => (
            <Tag key={index} color="default">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      {/* <div className="my-5">
        <h3>Area Covered</h3>
        <p className="mt-2 text-sm">
          The dataset covers the United Arab Emirates and its economy.
        </p>
      </div> */}
      <div className="my-5">
        <h3 className="text-[#FFD100]">Summary</h3>
        <p className="mt-2 text-sm">{dataset?.summary || "Not available"}</p>
      </div>
    </div>
  );
};

export default Overview;
