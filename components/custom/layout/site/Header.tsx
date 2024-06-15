"use client";

import React from "react";
import { Nav } from "./Nav";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a href="/" className="flex text-3xl  font-medium mb-4 md:mb-0">
            CongoMetrix
          </a>
          <button
            className=" pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center justify-between" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="mx-auto">
            <Nav />
          </div>

          <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-black-500 text-black-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-black-500 hover:text-white-500 transition-all hover:shadow-black ">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
