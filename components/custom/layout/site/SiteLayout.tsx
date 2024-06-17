import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default SiteLayout;
