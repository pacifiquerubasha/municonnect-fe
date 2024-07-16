"use client";

import * as React from "react";
import {
  CopyIcon,
} from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { copyTextToClipboard } from "@/lib/utils";
import { AppContext } from "@/providers/ContextProvider";
import { colors } from "@/lib/colors";

const ApiKey = () => {
    const { currentUser } = React.useContext(AppContext);

    return (
        <Card className="w-full bg-slate-100">
          <CardHeader>
            <CardTitle className="text-[#0085CA]">API KEY</CardTitle>
            <CardDescription>
              Use this key to authenticate your requests to our datasets API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-2 rounded-md bg-white">
              <p className="text-xs truncate">{currentUser?.apiKey}</p>
              <Popover>
                <PopoverTrigger
                  onClick={() => copyTextToClipboard(currentUser?.apiKey || "")}
                >
                  <div className="flex items-center gap-2">
                    <CopyIcon width={15} />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-[5rem] p-[0.5rem]">
                  Copied
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>
    );
};

export default ApiKey;