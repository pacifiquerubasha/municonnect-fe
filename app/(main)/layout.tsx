"use client";

import Aside from "@/components/custom/layout/app/Aside";
import Header from "@/components/custom/layout/app/Header";
import { AppContext } from "@/providers/ContextProvider";
import { getCurrentUser } from "@/services/endpoints/users";
import { useUser } from "@clerk/nextjs";
import { Tour, TourProps } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";

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

  const [open, setOpen] = useState<boolean>(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const steps: TourProps["steps"] = [
    {
      title: "Your Datasets",
      description: `
        View all the datasets you have uploaded to the platform. You can also search for specific datasets using the search bar.
      `,
      target: () => ref1.current!,
    },
    {
      title: "Account information",
      description: `
        View your account information, including your role and the date you joined the platform.
      `,
      target: () => ref2.current!,
    },
    {
      title: "Users",
      description: `
        View all users on the platform, including their roles and the date they joined the platform.`,
      target: () => ref3.current!,
    },
    {
      title: "Startups",
      description: `
        View all the startups you have added to the platform. You can also search for specific startups using the search bar.
      `,
      target: () => ref4.current!,
    },
  ];

  const [tourSteps, setTourSteps] = useState<TourProps["steps"]>([]);

  useEffect(() => {
    const tour = localStorage.getItem("muni__dashboard-tour");
    if (currentUser && !tour) {
      if (currentUser?.role === "admin") {
        setTourSteps(steps);
      } else {
        setTourSteps(steps.slice(0, 2));
      }
      setOpen(true);
    }
  }, [currentUser]);

  const asideRefs = [
    ref1, ref3, ref4
  ]

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {isLoadedUser ? (
        <>
          <Aside refs={asideRefs}/>
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 h-screen">
            <Header breadcrumbs={breadcrumbs} tourRef={ref2}/>
            {children}
          </div>
          <Tour
            open={open}
            onClose={() => {
              localStorage.setItem("muni__dashboard-tour", "true");
              setOpen(false);
            }}
            steps={tourSteps}
            indicatorsRender={(current, total) => (
              <span>
                {current + 1} / {total}
              </span>
            )}
          />
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
