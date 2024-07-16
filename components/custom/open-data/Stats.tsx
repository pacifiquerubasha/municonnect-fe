import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  CreditCard,
  DollarSign,
  Download,
  FileSpreadsheet,
  Handshake,
  Users,
} from "lucide-react";

const Stats = ({ stats, tourRef }: { stats: any; tourRef: any }) => {
  return (
    <div className="grid gap-4 max-w-5xl w-full md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card ref={tourRef} x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
          <CardTitle className="text-sm font-medium ">
            Uploaded Datasets
          </CardTitle>
          <FileSpreadsheet className="h-4 w-4 text-[#0085CA]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#0085CA]">
            {stats?.totalDatasets}
          </div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Downloads</CardTitle>
          <Download className="h-4 w-4 text-[#EF3340]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#EF3340]">
            {stats?.totalDownloads}
          </div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Engagement</CardTitle>
          <Users className="h-4 w-4 text-[#FFD100]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold flex items-center gap-2 text-[#FFD100]">
            {stats?.totalUsers} <p className="text-xs">users</p>
          </div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Conversations</CardTitle>
          <Handshake className="h-4 w-4 text-[#0085CA]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#0085CA]">
            {stats?.totalMessages}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;
