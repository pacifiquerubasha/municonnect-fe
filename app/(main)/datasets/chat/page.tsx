"use client";

import Aside from "@/components/custom/layout/app/Aside";
import Header from "@/components/custom/layout/app/Header";
import ChatSettings from "./ChatSettings";
import ChatBody from "./ChatBody";
import { useSearchParams } from "next/navigation";

export function Chats() {

  const searchParams = useSearchParams();
  const dataset = searchParams.get("dataset");
  const fileName = searchParams.get("fileName");
  
  console.log(searchParams.get("dataset"))

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
    <main className="grid  flex-1 items-end gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      {/* <ChatSettings /> */}
      <ChatBody />
    </main>
  );
}

export default Chats;
