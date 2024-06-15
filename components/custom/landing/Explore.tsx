import React from "react";
import { SVG1, SVG2, SVG3, SVG4, SVG5, SVG6 } from "./Svgs";

const Explore = () => {

  const research = {
    "title": "Articles and Journals",
    "description": "Explore a curated collection of articles, research papers, and academic journals focused on urban development.",
    "items": [
      {
        "icon": SVG4,
        "title": "Published Articles",
        "subtitle": "Find articles and papers on urban development and data insights."
      },
      {
        "icon": SVG6,
        "title": "Academic Journals",
        "subtitle": "Access academic journals delving into urban development and related fields."
      },
      {
        "icon": SVG1,
        "title": "Contribute and Collaborate",
        "subtitle": "Share your research, articles, or papers, collaborate to advance knowledge."
      }
    ]
  }

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-200 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-5xl font-bold  mb-4">{research.title}</h2>
            <p className="text-xl text-gray-600">
              {research.description}
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto mt-10  grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {
              research.items.map((item, i) => (
                <div key={i} className="relative -mt-20 flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <item.icon/>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-center">
                    {item.subtitle}
                  </p>
                </div>
              ))
            }
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
