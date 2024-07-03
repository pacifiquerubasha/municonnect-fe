"use client";

import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Building,
  CreditCard,
  DollarSign,
  UserCheck,
  UserCircle,
  Users,
  Users2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UsersTable from "./UsersTable";
import { useUser } from "@clerk/nextjs";
import { getAllUsers } from "@/services/endpoints/users";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
const page = () => {
  const { user, isSignedIn } = useUser();

  const [statsData, setStatsData] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const handleGetUsers = async () => {
    try {
      setIsLoaded(false);
      const response = await getAllUsers(user?.id as string);
      if (response.data) {
        setStatsData(response.data.stats);
        setUsers(response.data.usersByCategory);
        console.log("UXX", response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    if (isSignedIn) handleGetUsers();
  }, [isSignedIn]);

  const tabs = [
    {
      name: "all",
      label: "All",
      data: users?.admin
        ? [...users?.admin, ...users?.institution, ...users?.individual]
        : [],
    },
    {
      name: "institution",
      label: "Institutions",
      data: users?.institution || [],
    },
    {
      name: "individual",
      label: "Individuals",
      data: users?.individual || [],
    },
    {
      name: "verified",
      label: "Verified",
      data: users?.verified || [],
    },
  ];

  const stats = [
    {
      label: "Total Users",
      value:
        statsData?.admin?.total +
          statsData?.individual?.total +
          statsData?.institution?.total || 0,
      percentage: `${(statsData?.individual?.increaseRate + statsData?.institution?.increaseRate)/2  || 0}% from last month`,
      icon: Users2,
    },
    {
      label: "Individuals",
      value: statsData?.individual?.total || 0,
      percentage: `${
        statsData?.individual?.increaseRate || 0
      }% from last month`,
      icon: UserCircle,
    },
    {
      label: "Institution",
      value: statsData?.institution?.total || 0,
      percentage: `${
        statsData?.institution?.increaseRate || 0
      }% from last month`,
      icon: Building,
    },
    {
      label: "Verified Users",
      value: statsData?.verified?.total || 0,
      percentage: `${statsData?.verified?.increaseRate || 0}% from last month`,
      icon: UserCheck,
    },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {!isLoaded ? (
          <>
            {new Array(4).fill(0).map((_, i) => (
              <Skeleton className="flex-1 h-32" />
            ))}
          </>
        ) : (
          <>
            {stats.map((stat) => (
              <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.label}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    +{stat.percentage}
                  </p>
                </CardContent>
              </Card>
            ))}
          </>
        )}
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger value={tab.name}>{tab.label}</TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent value={tab.name}>
            {!isLoaded ? (
              <>
                {new Array(5).fill(0).map((_, i) => (
                  <Skeleton className="h-8 w-full mt-2" />
                ))}
              </>
            ) : (
              <>
                {tab.data?.length === 0 ? (
                  <div className="flex justify-center items-center h-40">
                    <p className="text-lg">No users found</p>
                  </div>
                ) : (
                  <UsersTable data={tab.data} />
                )}
              </>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
};

export default page;
