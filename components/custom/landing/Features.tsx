import React from "react";

const Features = () => {
  return (
    <>
      <h2 className="pt-56 text-2xl font-semibold tracking-tighter text-center text-black lg:text-7xl lg:leading-[150%] md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] via-[#0085CA] to-[#EF3340]">
        Empowering Startups.
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-black font-normal leading-relaxed fs521 lg:w-2/3">
        Discover the innovative startups in Congo’s entrepreneurial ecosystem,
        categorized by sectors and their unique contributions.
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <div className="ktq4">
          <img className="w-10" src="/vercel.svg"></img>
          <h3 className="pt-3 font-semibold text-lg text-[#EF3340]">
            Tech Startups
          </h3>
          <p className="pt-2 value-text text-black fkrr1">
            Innovative solutions in software development and IT services.
            Example: CongoTech, an AI-driven software provider.
          </p>
        </div>
        <div className="ktq4">
          <img className="w-10" src="/vercel.svg"></img>
          <h3 className="pt-3 font-semibold text-lg text-[#EF3340]">
            Agritech Startups
          </h3>
          <p className="pt-2 value-text text-black fkrr1">
            Transforming agriculture with technology for better productivity.
            Example: AgriSmart uses drones for precision farming.
          </p>
        </div>
        <div className="ktq4">
          <img className="w-10" src="/vercel.svg"></img>
          <h3 className="pt-3 font-semibold text-lg text-[#EF3340]">
            HealthTech Startups
          </h3>
          <p className="pt-2 value-text text-black fkrr1">
            Advancing healthcare with digital solutions. Example: MedConnect
            offers a platform for remote consultations.
          </p>
        </div>
        <div className="ktq4">
          <img className="w-10" src="/vercel.svg"></img>
          <h3 className="pt-3 font-semibold text-lg text-[#EF3340]">
            FinTech Startups
          </h3>
          <p className="pt-2 value-text text-black fkrr1">
            Revolutionizing financial services with digital banking. Example:
            FinServe provides mobile payment solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
