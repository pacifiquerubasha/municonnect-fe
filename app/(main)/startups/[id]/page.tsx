"use client";

import { getStartup } from "@/services/endpoints/startups";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { Skeleton } from "antd";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { start } from "repl";

const StatupDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [startup, setStartup] = useState<any>({});
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const handleGetStartup = async () => {
    try {
      setIsLoaded(false);
      const response = await getStartup(id as string);
      if (response.status === 200) {
        console.log(response.data);
        setStartup(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    handleGetStartup();
  }, []);

  return (
    <>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        {!isLoaded ? (
          <Skeleton
            className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6"
            paragraph={{ rows: 10 }}
            active
          />
        ) : (
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-gray-200 pb-6">
              <Link
                href={"/startups"}
                className="text-sm flex items-center gap-2 leading-none text-gray-600 mb-8"
              >
                <CaretLeftIcon /> Back
              </Link>
              <p className="text-sm leading-none text-gray-600">
                {startup?.category}
              </p>
              <h1
                className="
                  lg:text-2xl
                  text-xl
                  font-semibold
                  lg:leading-6
                  leading-7
                  text-gray-800
                  mt-2
              "
              >
                {startup?.name}
              </h1>
            </div>
            <div>
              <p className=" text-base lg:leading-tight leading-normal text-gray-600 mt-7">
                {startup?.description}
              </p>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between mt-8">
              <p className="text-base leading-4 text-gray-800">Founder</p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600">
                  {startup?.founder}
                </p>
              </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800">Market Value</p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600 mr-3">
                  {startup?.stage} -{startup?.marketValue}
                </p>
              </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800">Location</p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600 mr-3">
                  {startup?.location}
                </p>
              </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800">Founded</p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600 mr-3">
                  {startup?.establishedDate?.split("T")[0]}
                </p>
              </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800">Contact</p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600 mr-3">
                  {startup?.contactEmail}
                </p>
              </div>
            </div>
            <Link href={startup?.website || ""} target="_blank">
              <button
                className="
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
              text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4
              hover:bg-gray-700
          "
              >
                Visit Website
              </button>
            </Link>

            {/* <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                onClick={() => setShow(!show)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">
                  Shipping and returns
                </p>
                <button
                  className="
                    cursor-pointer
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                    rounded
                  "
                  aria-label="show or hide"
                >
                  <svg
                    className={"transform " + (show ? "rotate-180" : "rotate-0")}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                  (show ? "block" : "hidden")
                }
                id="sect"
              >
                You will be responsible for paying for your own shipping costs for
                returning your item. Shipping costs are nonrefundable
              </div>
            </div>
          </div>
          <div>
            <div className="border-b py-4 border-gray-200">
              <div
                onClick={() => setShow2(!show2)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">Contact us</p>
                <button
                  className="
                    cursor-pointer
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                    rounded
                  "
                  aria-label="show or hide"
                >
                  <svg
                    className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                  (show2 ? "block" : "hidden")
                }
                id="sect"
              >
                If you have any questions on how to return your item to us,
                contact us.
              </div>
            </div>
          </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default StatupDetails;
