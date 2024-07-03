"use client";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useNotify from "@/hooks/useNotify";
import { startupIndustries } from "@/lib/utils";
import { addStartup } from "@/services/endpoints/startups";
import { useUser } from "@clerk/nextjs";
import { ReloadIcon } from "@radix-ui/react-icons";
import React from "react";
import { useForm } from "react-hook-form";

export default function AddStartup({
  setOpen,
  setShouldRefresh,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShouldRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { user, isLoaded } = useUser();
  const { notify, contextHolder } = useNotify();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm();

  const handleAddStartup = async (values: any) => {
    try {
      const response = await addStartup(user?.id as string, values);
      if (response.status === 201) {
        setShouldRefresh((prev) => !prev);
        notify("Startup added successfully", "success");
        reset();
        setOpen(false);
      }
    } catch (error) {
      notify("An error occurred", "error");
      console.log(error);
    }
  };

  return (
    <>
      {contextHolder}
      <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>ADD STARTUP</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleAddStartup)}
          className="grid gap-6 py-4"
        >
          <div className="grid w-full max-w-sm lg:max-w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="name"
              id="name"
              placeholder="Name"
              {...register("name", { required: true })}
              required
            />
          </div>
          <div className="grid w-full max-w-sm lg:max-w-full items-center gap-1.5">
            <Label htmlFor="category">Category</Label>
            <Select
              name="category"
              onValueChange={(value) => setValue("category", value)}
              required
            >
              <SelectTrigger id="category" aria-label="Select category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {startupIndustries.map((industry) => (
                  <SelectItem value={industry.name}>{industry.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm lg:max-w-full items-center gap-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={3}
              placeholder="description"
              {...register("description", { required: true })}
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="grid w-full max-w-sm lg:max-w-full items-center gap-1.5">
              <Label htmlFor="founder">Founder</Label>
              <Input
                id="founder"
                placeholder="founder"
                {...register("founder", { required: true })}
                required
              />
            </div>
            <div className="grid w-full max-w-sm lg:max-w-full items-center gap-1.5">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                placeholder="website"
                {...register("website", { required: true })}
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="grid w-full max-w-sm lg:max-w-full items-center gap-1.5">
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input
                type="email"
                id="contactEmail"
                placeholder="Contact Email"
                {...register("contactEmail", { required: true })}
                required
              />
            </div>
            <div className="grid w-full max-w-sm lg:max-w-full items-center gap-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Location"
                {...register("location", { required: true })}
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="grid w-full max-w-sm lg:max-w-full items-center gap-1.5">
              <Label htmlFor="establishedDate">Established Date</Label>
              <Input
                type="date"
                id="establishedDate"
                placeholder="Established Date"
                {...register("establishedDate", { required: true })}
                required
              />
            </div>
            <div className="grid w-full max-w-sm lg:max-w-full items-center gap-1.5">
              <Label htmlFor="marketValue">Market Value</Label>
              <Input
                id="marketValue"
                placeholder="marketValue"
                {...register("marketValue")}
              />
            </div>
          </div>

          <div className="grid w-full max-w-sm lg:max-w-full items-center gap-1.5">
            <Label htmlFor="stage">Funding stage</Label>
            <Select
              name="stage"
              onValueChange={(value) => setValue("stage", value)}
              required
            >
              <SelectTrigger id="stage" aria-label="Select stage">
                <SelectValue placeholder="Select stage" />
              </SelectTrigger>
              <SelectContent>
                {["ideation", "validation", "growth", "established"].map(
                  (stage) => (
                    <SelectItem value={stage} className="capitalize">
                      {stage}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <ReloadIcon />}
              ADD
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
}
