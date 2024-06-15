"use client";

import { Button } from "@/components/ui/button";

import {
  Bird,
  CornerDownLeft,
  FileBarChart,
  Mic,
  Paperclip,
  Rabbit,
  Turtle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

const ChatSettings = () => {
  return (
    <div
      className="relative hidden flex-col items-start gap-8 md:flex"
      x-chunk="dashboard-03-chunk-0"
    >
      <form className="grid w-full items-start gap-6">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
          <div className="grid gap-3">
            <Label htmlFor="dataset">Dataset</Label>
            <Select>
              <SelectTrigger
                id="dataset"
                className="items-start [&_[data-description]]:hidden"
              >
                <SelectValue placeholder="Select a dataset" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dataset">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <FileBarChart className="size-5" />
                    <div className="grid gap-0.5">
                      <p>
                        <span className="font-medium text-foreground">
                          Transport and Logistics
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        Dataset for transport and logistics.
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="health">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Bird className="size-5" />
                    <div className="grid gap-0.5">
                      <p>
                        <span className="font-medium text-foreground">
                          Health
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        Dataset for health.
                      </p>
                    </div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="length">Length</Label>
            <Select>
              <SelectTrigger
                id="length"
                className="items-start [&_[data-description]]:hidden"
              >
                <SelectValue placeholder="Select response length" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short">Short</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="long">Long</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="model">Language</Label>
            <Select>
              <SelectTrigger
                id="model"
                className="items-start [&_[data-description]]:hidden"
              >
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="swahili">Swahili</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </fieldset>
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
          <div className="grid gap-3">
            <Label htmlFor="role">Role</Label>
            <Select defaultValue="system">
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="assistant">Assistant</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="You are a..."
              className="min-h-[9.5rem]"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ChatSettings;
