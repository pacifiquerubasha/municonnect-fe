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

import Aside from "@/components/custom/layout/app/Aside";
import Header from "@/components/custom/layout/app/Header";
import { ReloadIcon, UploadIcon } from "@radix-ui/react-icons";

import type { UploadProps } from "antd";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createDataset } from "@/services/endpoints/datasets";
import useNotify from "@/hooks/useNotify";
import { useUser } from "@clerk/nextjs";

const { Dragger } = Upload;

const AddDataset = () => {
  const router = useRouter();
  const { notify, contextHolder } = useNotify();
  
  const { user } = useUser();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<any>();

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

  const handleAddDataset = async (data: any) => {
    console.log(data);
    try {
      const response = await createDataset({...data, owner: user?.id});
      if (response.data) {
        notify("Dataset added successfully", "success");
        router.push("/datasets");
      }
    } catch (error) {
      notify("An error occurred", "error");
    }
  };

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "http://localhost:8080/upload/",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        const response = info.fileList[0].response;
        console.log(response);
        setValue("mainFile", response.main_file_url);
        setValue("numRows", response.num_rows);
        setValue("numColumns", response.fields.length);
        setValue("fileSize", response.file_size);
        setValue("fields", response.fields);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        console.log(info.file.response);
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const licenses = [
    "Open Data Commons Open Database License (ODbL)",
    "Creative Commons CC BY (Attribution)",
    "Creative Commons CC0 (Public Domain Dedication)",
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Aside />
      {contextHolder}
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header breadcrumbs={breadcrumbs} />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <form
            onSubmit={handleSubmit(handleAddDataset)}
            className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4"
          >
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
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.back()}
                >
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
                          {...register("title", { required: true })}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Enter the dataset description"
                          className="min-h-32"
                          {...register("description", { required: true })}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="category">Domain</Label>
                        <Select
                          name="domain"
                          onValueChange={(value) => setValue("domain", value)}
                        >
                          <SelectTrigger
                            id="category"
                            aria-label="Select category"
                          >
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="healthcare">
                              Healthcare
                            </SelectItem>
                            <SelectItem value="transportation">
                              Transportation
                            </SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="agriculture">
                              Agriculture
                            </SelectItem>
                            <SelectItem value="energy">Energy</SelectItem>
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
                          {...register("tags", { required: true })}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1" className="pb-5">
                  <CardHeader>
                    <CardTitle>Files and Formats</CardTitle>
                    <CardDescription>
                      Upload the actual dataset files and specify the file
                      formats.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 ">
                      <div className="grid gap-3">
                        <Label htmlFor="language">Licence</Label>
                        <Select
                          name="licence"
                          onValueChange={(value) => setValue("licence", value)}
                        >
                          <SelectTrigger
                            id="licence"
                            aria-label="Select licence"
                          >
                            <SelectValue placeholder="Select licence" />
                          </SelectTrigger>
                          <SelectContent>
                            {licenses.map((license) => (
                              <SelectItem value={license}>{license}</SelectItem>
                            ))}
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
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Metadata</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-1">
                      <div className="grid gap-2">
                        <Label htmlFor="category">Date Published</Label>
                        <Input
                          id="sources"
                          type="date"
                          className="w-full"
                          placeholder="Enter the dataset sources"
                          {...register("releaseDate", { required: true })}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="language">Language</Label>
                        <Select
                          name="language"
                          onValueChange={(value) => setValue("language", value)}
                        >
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
                        <Checkbox
                          id="terms"
                          onCheckedChange={(checked) =>
                            setValue("terms", checked)
                          }
                        />
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
                        <Checkbox
                          id="private"
                          onCheckedChange={(checked) =>
                            setValue("isPrivate", checked)
                          }
                        />
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
              <Button size="sm" disabled={isSubmitting}>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Save Product
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddDataset;
