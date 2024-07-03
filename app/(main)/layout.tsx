"use client";

import Aside from "@/components/custom/layout/app/Aside";
import Header from "@/components/custom/layout/app/Header";
import { AppContext } from "@/providers/ContextProvider";
import { getCurrentUser } from "@/services/endpoints/users";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user, isLoaded, isSignedIn } = useUser();
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const breadcrumbs = [
    {
      href: "/overview",
      title: "Dashboard",
    },
  ];

  const [isLoadedUser, setIsLoadedUser] = useState(false);
  const handleGetCurrentUser = async () => {
    try {
      setIsLoadedUser(false);
      const response = await getCurrentUser(user?.id as string);
      if (response.data) {
        setCurrentUser(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadedUser(true);
    }
  };

  useEffect(() => {
    if (isSignedIn && isLoaded) handleGetCurrentUser();
  }, [isLoaded, isSignedIn]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {isLoadedUser ? (
        <>
          <Aside />
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 h-screen">
            <Header breadcrumbs={breadcrumbs} />
            {children}
          </div>
        </>
      ) : (
        <div className="h-screen w-screen flex items-center justify-center">
          <p className="text-lg">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default layout;
