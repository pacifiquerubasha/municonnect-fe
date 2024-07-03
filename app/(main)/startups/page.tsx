"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Cpu, PlusCircle } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AddStartup from "./AddStartup";
import { getStartups } from "@/services/endpoints/startups";
import { Skeleton } from "@/components/ui/skeleton";
import { Flex } from "antd";
import { startupIndustries } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Startups = () => {
  const { user, isSignedIn } = useUser();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const navigate = (path: string) => router.push(path, { scroll: false });

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [startups, setStartups] = useState<any[]>([]);
  const [startupsToShow, setStartupsToShow] = useState<any[]>([]);
  const handleGetStartups = async () => {
    try {
      setIsLoaded(false);
      const response = await getStartups();
      if (response.status === 200) {
        console.log(response.data);
        setStartups(response.data);
        setStartupsToShow(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  const [shouldRefresh, setShouldRefresh] = useState<boolean>(false);
  useEffect(() => {
    console.log("UU", user);
    handleGetStartups();
  }, [shouldRefresh]);

  const handleSearch = (e: React.ChangeEvent) => {
    const searchValue = (e.target as HTMLInputElement).value;
    if (searchValue) {
      const filteredStartups = startups.filter((startup) =>
        startup.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setStartupsToShow(filteredStartups);
    } else {
      setStartupsToShow(startups);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center items-center mb-4 gap-[10%]">
            <Input placeholder="Search" onChange={handleSearch} />
            <DialogTrigger asChild>
              <Button size="sm" className="h-7 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Startup
                </span>
              </Button>
            </DialogTrigger>
          </div>
          <div className="flex flex-wrap -m-2">
            {!isLoaded ? (
              <>
                {new Array(16).fill(0).map((_, i) => (
                  <Flex className="lg:w-1/4 md:w-1/2 w-full h-32 p-2">
                    <Skeleton key={i} className="w-full h-full " />
                  </Flex>
                ))}
              </>
            ) : (
              <>
                {startupsToShow?.map((startup, i) => {
                  const IconElement = startupIndustries.find(
                    (industry) => industry.name === startup?.category
                  )?.icon;
                  return (
                    <div className="p-2 cursor-pointer lg:w-1/4 md:w-1/2 w-full" onClick={()=>navigate(`/startups/${startup._id}`)}>
                      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <div className="w-16 h-16 bg-black text-white flex justify-center items-center rounded-full mr-4">
                          {IconElement ? (
                            <IconElement className="h-8 w-8" />
                          ) : (
                            <Cpu className="h-8 w-8" />
                          )}
                        </div>
                        <div className="flex-grow">
                          <h2 className="text-gray-900 title-font font-medium">
                            {startup?.name}
                          </h2>
                          <p className="text-gray-500">{startup?.location}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>

      <AddStartup setOpen={setOpen} setShouldRefresh={setShouldRefresh} />
    </Dialog>
  );
};

export default Startups;
