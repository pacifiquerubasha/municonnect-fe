"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Package, PlusCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Space, Upload, message } from "antd";

import Aside from "@/components/custom/layout/Aside";
import Header from "@/components/custom/layout/Header";
import { UploadIcon } from "@radix-ui/react-icons";

import type { UploadProps } from "antd";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from 'next/navigation';

const { Dragger } = Upload;

const AddDataset = () => {
  const router = useRouter();

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
      title: "Add Dataset",
    },
  ];

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Aside />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header breadcrumbs={breadcrumbs} />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={() => router.back()}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Add Dataset
              </h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm" onClick={() => router.back()}>
                  Discard
                </Button>
                <Button size="sm">Save Dataset</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Dataset Details</CardTitle>
                    <CardDescription>
                      Provide basic information about the dataset.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          type="text"
                          className="w-full"
                          placeholder="Enter the dataset title"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Enter the dataset description"
                          className="min-h-32"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                          <SelectTrigger
                            id="category"
                            aria-label="Select category"
                          >
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clothing">Clothing</SelectItem>
                            <SelectItem value="electronics">
                              Electronics
                            </SelectItem>
                            <SelectItem value="accessories">
                              Accessories
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="tags">Tags</Label>
                        <Input
                          id="tags"
                          type="text"
                          className="w-full"
                          placeholder="Enter the dataset tags. Eg. transport, traffic..."
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Files and Formats</CardTitle>
                    <CardDescription>
                      Upload the actual dataset files and specify the file
                      formats.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="format">Format</Label>
                        <Select>
                          <SelectTrigger id="format" aria-label="Select format">
                            <SelectValue placeholder="Select format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="csv">CSV</SelectItem>
                            <SelectItem value="excel">Excel</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="sources">File Upload</Label>
                        <Dragger {...props} maxCount={1}>
                          <p className="ant-upload-drag-icon flex justify-center">
                            <Package />
                          </p>
                          <p className="ant-upload-text">
                            Click or drag file to this area to upload
                          </p>
                          <p className="ant-upload-hint">
                            Support for a single file upload. Strictly
                            prohibited from uploading unauthorized data or other
                            banned files.
                          </p>
                        </Dragger>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Metadata</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Version</Label>
                        <Input
                          id="sources"
                          type="text"
                          className="w-full"
                          placeholder="Enter the version"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="category">Date Published</Label>
                        <Input
                          id="sources"
                          type="date"
                          className="w-full"
                          placeholder="Enter the dataset sources"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="language">Language</Label>
                        <Select>
                          <SelectTrigger
                            id="language"
                            aria-label="Select language"
                          >
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="french">French</SelectItem>
                            <SelectItem value="lingala">Lingala</SelectItem>
                            <SelectItem value="spanish">Spanish</SelectItem>
                            <SelectItem value="german">German</SelectItem>
                            <SelectItem value="italian">Italian</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Data Sources and Resources</CardTitle>
                    <CardDescription>
                      List the sources of data, provide sample data files, and
                      any related resources.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="sources">Data Sources</Label>
                        <Input
                          id="sources"
                          type="text"
                          className="w-full"
                          placeholder="Enter the dataset sources"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="sources">Sample data</Label>
                        <Upload
                          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                          listType="picture"
                          maxCount={1}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-full gap-1"
                          >
                            <UploadIcon className="h-3.5 w-3.5" />
                            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                              Upload (Max: 1)
                            </span>
                          </Button>
                        </Upload>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="licence">License</Label>
                        <Select>
                          <SelectTrigger
                            id="license"
                            aria-label="Select license"
                          >
                            <SelectValue placeholder="Select license" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="obd">
                              Open Data Commons Open Database License (ODbL)
                            </SelectItem>
                            <SelectItem value="cc-by">
                              Creative Commons Attribution (CC BY)
                            </SelectItem>
                            <SelectItem value="cc-by-sa">
                              Creative Commons Attribution-ShareAlike (CC BY-SA)
                            </SelectItem>
                            <SelectItem value="cc-by-nc">
                              Creative Commons Attribution-NonCommercial (CC
                              BY-NC)
                            </SelectItem>
                            <SelectItem value="cc-by-nd">
                              Creative Commons Attribution-NoDerivatives (CC
                              BY-ND)
                            </SelectItem>
                            <SelectItem value="mit">MIT License</SelectItem>
                            <SelectItem value="public-domain">
                              Public Domain
                            </SelectItem>
                            <SelectItem value="custom">
                              Custom License
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Contact and Attribution</CardTitle>
                    <CardDescription>
                      Enter contact information and metadata
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          placeholder="Enter the contact name"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="text"
                          className="w-full"
                          placeholder="Enter the contact email"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="organisation">Organization</Label>
                        <Input
                          id="organisation"
                          type="text"
                          className="w-full"
                          placeholder="Enter the contact organisation"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-5">
                  <CardHeader>
                    <CardTitle>Terms and Conditions</CardTitle>
                    <CardDescription>
                      Review and agree to the terms of use and set visibility
                      preferences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="items-top flex space-x-2">
                        <Checkbox id="terms" />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Accept terms and conditions
                          </label>
                          <p className="text-sm text-muted-foreground">
                            You agree to our Terms of Service and Privacy
                            Policy.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="private" />
                        <label
                          htmlFor="private"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Dataset is private
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddDataset;
