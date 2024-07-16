"use client";

import * as React from "react";

import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { Flex } from "antd";
import { copyTextToClipboard } from "@/lib/utils";
import { AppContext } from "@/providers/ContextProvider";
import { getDatasetsStats } from "@/services/endpoints/datasets";
import { Skeleton } from "@/components/ui/skeleton";
import { colors } from "@/lib/colors";
import { Link } from "@/lib/router-events";

const Stats = () => {
  const { user } = useUser();

  const [stats, setStats] = React.useState<any>([]);
  const [isLoadedStats, setIsLoadedStats] = React.useState<boolean>(false);
  const handleGetStats = async () => {
    try {
      const response = await getDatasetsStats();
      if (response.status === 200) {
        console.log(response.data);
        setStats(response.data.statsArray);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadedStats(true);
    }
  };

  React.useEffect(() => {
    handleGetStats();
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <CardTitle>
            Welcome, {user?.firstName} {user?.lastName}
          </CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Share your knowledge and data. Unlock collective insights to drive
            progress, empower others, and foster innovation.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/datasets/add">
            <Button style={{ background: colors.blue }}>
              Upload a Dataset
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card x-chunk="dashboard-05-chunk-1">
        {!isLoadedStats ? (
          <Skeleton className="h-full w-full rounded-xl" />
        ) : (
          <>
            <CardHeader className="pb-2">
              <CardDescription>Platform Datasets</CardDescription>
              <CardTitle className="text-4xl">{stats?.totalDatasets}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last month
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </>
        )}
      </Card>
      <Card x-chunk="dashboard-05-chunk-2">
        {!isLoadedStats ? (
          <Skeleton className="h-full w-full rounded-xl" />
        ) : (
          <>
            <CardHeader className="pb-2">
              <CardDescription>Active Users</CardDescription>
              <CardTitle className="text-4xl">{stats?.totalUsers}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +22% from previous quarter
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={12} aria-label="12% increase" />
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
};

export default Stats;
