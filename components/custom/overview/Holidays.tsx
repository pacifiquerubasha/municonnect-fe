import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getHolidays } from "@/services/endpoints/dashboard";
import { Skeleton } from "@/components/ui/skeleton";

const Holidays = () => {
  const [holidays, setHolidays] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const handleGetHolidays = async () => {
    try {
      const response = await getHolidays();
      if (response.data) {
        setHolidays(response.data);
      }
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetHolidays();
  }, []);

  const sortedHolidays = loading
    ? new Array(3).fill(0)
    : holidays?.sort((a: any, b: any) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });

  const colorsList = [
    "border-yellow-600 bg-yellow-100 text-yellow-600",
    "border-red-600 bg-red-100 text-red-600",
    "border-blue-600 bg-blue-100 text-blue-600",
  ];

  return (
    <Card className="w-full bg-slate-100">
      <CardHeader>
        <CardTitle className="text-[#0085CA]">HOLIDAYS</CardTitle>
        <CardDescription>
          Public Holidays in the Democratic Republic of Congo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-between items-start gap-2 w-full">
          {sortedHolidays?.map((holiday: any, index: number) =>
            holiday ? (
              <div
                key={index}
                className={`w-[45%] flex flex-col gap-1 border-l-4 ${
                  colorsList[index % 3]
                } pl-2 py-2`}
              >
                <span className="text-sm font-semibold">{holiday.name}</span>
                <span className="text-xs">
                  {holiday.day} {holiday.date}
                </span>
              </div>
            ) : (
              <Skeleton className="h-[60px] w-full rounded-xl" />
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Holidays;
