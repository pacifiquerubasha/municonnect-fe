import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Categories = ({
  categories,
  tourRef,
}: {
  categories: any;
  tourRef: any;
}) => {
  return (
    <div className="max-w-5xl w-full mt-10">
      <div className="flex gap-5 items-center">
        <h3 className="text-xl">Top Categories</h3>
        {/* <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="#">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button> */}
      </div>
      <div className="w-full overflow-x-auto no-scrollbar mt-5">
        <div ref={tourRef} className="flex w-auto gap-4 pr-5">
          {categories?.map((category: any, index: number) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-md border p-2 text-sm"
            >
              <span>{category.domain}</span>
              <span>{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
