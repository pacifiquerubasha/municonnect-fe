"use client";

import Aside from "@/components/custom/layout/app/Aside";
import Header from "@/components/custom/layout/app/Header";
import ChatSettings from "./ChatSettings";
import ChatBody from "./ChatBody";

export function Chats() {
  const breadcrumbs = [
    {
      href: "/overview",
      title: "Overview",
    },
    {
      href: "/datasets",
      title: "Datasets",
    },
    {
      href: "",
      title: "Chat",
    },
  ];

  return (
    <div className="flex min-h-screen  w-full flex-col bg-muted/40">
      <Aside />
      <div className="flex flex-col min-h-screen sm:gap-4 sm:py-4 sm:pl-14">
        <Header breadcrumbs={breadcrumbs} />
        <main className="grid  flex-1 items-end gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <ChatSettings/>
          <ChatBody/>
        </main>
      </div>
    </div>
  );
}

export default Chats;
