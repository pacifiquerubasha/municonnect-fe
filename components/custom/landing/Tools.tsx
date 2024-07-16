"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Tools = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, [activeTab]);

  const keyFeatures = {
    title: "Comprehensive Data and Datasets",
    description:
      "Explore features that provide seamless access to integrated municipal data, advanced analytics, and open data platforms.",
    items: [
      {
        title: "Seamless Integration",
        subtitle:
          "Integrate data from multiple municipal services for informed decision-making and strategic planning.",
      },
      {
        title: "Advanced Analytics",
        subtitle:
          "Utilize machine learning algorithms to gain insights and detect anomalies in municipal data.",
      },
      {
        title: "Open Data Platform",
        subtitle:
          "Access a range of open data sources and a dynamic data marketplace for comprehensive information.",
      },
    ],
  };

  return (
    <section className="relative">
      <div
        className="absolute inset-0 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] via-[#0085CA] to-[#EF3340]">
              {keyFeatures.title}{" "}
            </h1>
            <p className="text-xl text-gray-600">{keyFeatures.description}</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {keyFeatures.items.map((item, index) => (
                  <a
                    key={index}
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      activeTab !== index + 1
                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(index + 1);
                    }}
                  >
                    <div>
                      <div className="font-bold leading-snug tracking-tight mb-1 text-[#0085CA]">
                        {item.title}
                      </div>
                      <div className="text-gray-600">{item.subtitle}</div>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-[#EF3340] text-white rounded-full shadow flex-shrink-0 ml-3">
                      <svg
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <div className="w-full">
                    <div
                      className={`transition ease-in-out duration-700 transform order-first ${
                        activeTab === 1
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-16 absolute"
                      }`}
                      style={{ display: activeTab === 1 ? "block" : "none" }}
                    >
                      <div className="relative inline-flex flex-col">
                        <Image
                          className="md:max-w-none mx-auto rounded"
                          src={"/features-bg.png"}
                          width={500}
                          height={462}
                          alt="Features bg"
                        />
                        <Image
                          className="md:max-w-none absolute w-full left-0 transform animate-float"
                          src={"/features-bg.png"}
                          width={500}
                          height={44}
                          alt="Element"
                          style={{ top: "30%" }}
                        />
                      </div>
                    </div>

                    <div
                      className={`transition ease-in-out duration-700 transform order-first ${
                        activeTab === 2
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-16 absolute"
                      }`}
                      style={{ display: activeTab === 2 ? "block" : "none" }}
                    >
                      <div className="relative inline-flex flex-col">
                        <Image
                          className="md:max-w-none mx-auto rounded"
                          src={"/features-bg.png"}
                          width={500}
                          height={462}
                          alt="Features bg"
                        />
                        <Image
                          className="md:max-w-none absolute w-full left-0 transform animate-float"
                          src={"/features-bg.png"}
                          width={500}
                          height={44}
                          alt="Element"
                          style={{ top: "30%" }}
                        />
                      </div>
                    </div>

                    <div
                      className={`transition ease-in-out duration-700 transform order-first ${
                        activeTab === 3
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-16 absolute"
                      }`}
                      style={{ display: activeTab === 3 ? "block" : "none" }}
                    >
                      <div className="relative inline-flex flex-col">
                        <Image
                          className="md:max-w-none mx-auto rounded"
                          src={"/features-bg.png"}
                          width={500}
                          height={462}
                          alt="Features bg"
                        />
                        <Image
                          className="md:max-w-none absolute w-full left-0 transform animate-float"
                          src={"/features-bg.png"}
                          width={500}
                          height={44}
                          alt="Element"
                          style={{ top: "30%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
