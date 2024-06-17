import { Button } from "@/components/ui/button";
import { categories } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="max-w-5xl w-full mt-10">
      <div className="flex gap-5 items-center">
        <h3 className="text-xl">Top Categories</h3>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="#">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="w-full overflow-x-auto no-scrollbar mt-5">
        <div className="flex w-auto gap-4 pr-5">
          {categories.slice(0, 10).map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-md border p-2 text-sm"
            >
              <span>{category.name}</span>
              <span>{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
