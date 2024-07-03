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
import useNotify from "@/hooks/useNotify";
import { verifyUser } from "@/services/endpoints/users";
import { useUser } from "@clerk/nextjs";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function VerifyUser({
  data,
  setOpen,
}: {
  data: any;
  setOpen: (value: boolean) => void;
}) {
  const { user, isSignedIn } = useUser();
  const { contextHolder, notify } = useNotify();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleVerifyUser = async () => {
    try {
      const response = await verifyUser(data?._id, user?.id as string);
      if (response.data) {
        console.log("Verified", response.data);
        notify("User verified successfully", "success");
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
      notify("Failed to verify user", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {contextHolder}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>VERIFY PROFILE</DialogTitle>
          <DialogDescription>
            Are you sure you want to verify the user {data?.username}?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleVerifyUser}
            disabled={isSubmitting}
          >
            {isSubmitting && <ReloadIcon />}
            Mark as Verified
          </Button>
        </DialogFooter>
      </DialogContent>
    </>
  );
}
