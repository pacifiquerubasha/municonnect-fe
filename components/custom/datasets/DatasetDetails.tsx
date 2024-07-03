"use client";

import {
  Copy,
  CreditCard,
  FileBarChart,
  FileSpreadsheet,
  MoreVertical,
  Sparkles,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Skeleton } from "@/components/ui/skeleton";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getDatasetSummary } from "@/services/endpoints/datasets";

type Props = {
  selectedDataset: any;
};
const DatasetDetails: React.FC<Props> = ({ selectedDataset }) => {
  const router = useRouter();
  const navigate = (path: string) => router.push(path, { scroll: false });

  const [isGettingSummary, setIsGettingSummary] = useState(false);
  const [summary, setSummary] = useState<any>(null);
  const handleGetSummary = async () => {
    try {
      setIsGettingSummary(true);
      const response = await getDatasetSummary(selectedDataset._id);
      if (response.data) {
        setSummary(response.data.summary);
        console.log(response.data.summary);
      }
    } catch (error) {
      console.error(error);
    }
    finally{
      setIsGettingSummary(false);
    }
  };

  return (
    <Card className="overflow-hidden">
      {!selectedDataset ? (
        <div className="flex flex-col justify-center items-center py-32">
          <FileSpreadsheet className="h-12 w-12 text-muted-foreground" />
          <p className="text-muted-foreground">No dataset selected</p>
          <p className="text-muted-foreground">
            Please select a dataset to view details
          </p>
        </div>
      ) : (
        <>
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                {selectedDataset.name}{" "}
                <Badge>
                  {selectedDataset.isPrivate ? "PRIVATE" : "PUBLIC"}
                </Badge>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Order ID</span>
                </Button>
              </CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-1">
                  <span>
                    Publish Date:{" "}
                    {new Date(selectedDataset.releaseDate).toDateString()}
                  </span>
                  <span>Version 1.1.0</span>
                </div>
              </CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Button
                size="sm"
                variant="outline"
                className="h-8 gap-1"
                onClick={() => navigate("/datasets/chat")}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Ask questions
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <MoreVertical className="h-3.5 w-3.5" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Trash</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Basic Details</div>
              <p>{selectedDataset.description}</p>
              <ul className="grid gap-3 mt-2">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span>{selectedDataset.domain}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Language</span>
                  <span>{selectedDataset.language}</span>
                </li>
              </ul>
              <Separator className="my-2" />
              <ul className="grid gap-3">
                <li className="flex flex-col gap-2">
                  <span className="text-muted-foreground">Tags</span>
                  <div className="flex gap-1">
                    {selectedDataset.tags.map((tag: string) => (
                      <Badge variant={"outline"}>{tag}</Badge>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-4">
              <div className="grid auto-rows-max gap-3">
                <div className="font-semibold">Licence</div>
                <div className="text-muted-foreground">
                  {selectedDataset.licence}
                </div>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">File Information</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Dataset</dt>
                  <dd>
                    <a href={selectedDataset.files.mainFile} target="_blank">
                      <Button
                        variant={"outline"}
                        className="flex gap-2 items-center"
                      >
                        <FileBarChart width={16} color="green" /> dataset
                      </Button>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold flex items-center gap-2">
                File Summary {!(summary || selectedDataset.summary) && <Sparkles className="h-3.5 w-3.5 cursor-pointer" onClick={handleGetSummary}/>}
              </div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <p>{summary || selectedDataset.summary}</p>
                </div>
                {isGettingSummary &&
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>}
              </dl>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Updated{" "}
              <time dateTime="2023-11-23">
                {new Date(selectedDataset.lastModified).toDateString()}
              </time>
            </div>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default DatasetDetails;
