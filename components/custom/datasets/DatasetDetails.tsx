"use client";

import {
  Copy,
  CreditCard,
  FileBarChart,
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

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert } from "antd";
import { useRouter } from "next/navigation";

const DatasetDetails = () => {

    const router = useRouter()
    const navigate = (path: string) => router.push(path, { scroll: false })

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Global Temperature Data <Badge>PUBLIC</Badge>
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
              <span>Publish Date: November 23, 2023</span>
              <span>Version 1.1.0</span>
            </div>
          </CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button size="sm" variant="outline" className="h-8 gap-1" onClick={()=>navigate("/datasets/chat")}>
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
          <p>
            Global temperature data from 1880 to 2023. The dataset includes
            temperature data from 7 continents and 195 countries.
          </p>
          <ul className="grid gap-3 mt-2">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Category</span>
              <span>Transport</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Language</span>
              <span>English</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Contact</span>
              <span>Pacifique Rubasha</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Contact Email</span>
              <span>pacifique@gmail.com</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex flex-col gap-2">
              <span className="text-muted-foreground">Tags</span>
              <div className="flex gap-1">
                {new Array(3).fill(0).map(() => (
                  <Badge variant={"outline"}>HELLO</Badge>
                ))}
              </div>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-3">
            <div className="font-semibold">Data sources</div>
            <address className="grid gap-0.5 not-italic text-muted-foreground">
              <span>Liam Johnson</span>
              <span>1234 Main St.</span>
              <span>Anytown, CA 12345</span>
            </address>
          </div>
          <div className="grid auto-rows-max gap-3">
            <div className="font-semibold">Licence</div>
            <div className="text-muted-foreground">MIT</div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">File Information</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Format</dt>
              <dd>CSV</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Sample Dataset</dt>
              <dd>
                <Button variant={"outline"} className="flex gap-2 items-center">
                  <FileBarChart width={16} color="green" /> file.xlsx
                </Button>
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Actual dataset</dt>
              <dd>
                <Button variant={"outline"} className="flex gap-2 items-center">
                  <FileBarChart width={16} color="green" /> file.xlsx
                </Button>
              </dd>
            </div>
          </dl>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold flex items-center gap-2">File Summary <Sparkles className="h-3.5 w-3.5" /></div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                soluta exercitationem perferendis reprehenderit, distinctio
                inventore provident voluptatem a mollitia ex quidem consectetur
                vitae, modi veniam iusto repudiandae cumque sint accusantium
                ipsam sunt quae maxime? Earum minima voluptatum omnis mollitia
                vel.
              </p>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">November 23, 2023</time>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DatasetDetails;
