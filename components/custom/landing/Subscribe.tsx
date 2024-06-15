import React from "react";

const Subscribe = () => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="pt-24 md:pt-36">
          <h1 className="mb-5 text-5xl font-bold text-black">
            Subscribe to our newsletter
          </h1>
          <h1 className="mb-9 text-2xl font-semibold text-gray-900">
            Enter your email address and get our newsletters straight away.
          </h1>
          <input
            type="email"
            placeholder="jack@example.com"
            name="email"
            autoComplete="email"
            className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
          />{" "}
          <a
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
            href="/"
          >
            <span className="justify-center">Subscribe</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
