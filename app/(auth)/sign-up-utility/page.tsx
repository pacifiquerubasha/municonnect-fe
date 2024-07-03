"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { createUser } from "@/services/endpoints/users";
import useNotify from "@/hooks/useNotify";
import { useRouter } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SignUpUtility() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<any>();
  const { user } = useUser();
  const { notify, contextHolder } = useNotify();
  const router = useRouter();

  const handleCreateAccount = async (values: any) => {
    const data = {
      bio: values.bio,
      username: user?.username,
      email: user?.primaryEmailAddress?.emailAddress,
      profilePicture: user?.imageUrl,
      authId: user?.id,
      fullName: user?.fullName,
      role: values.role,
    };

    try {
      const response = await createUser(data);
      if (response.status === 201) {
        notify("Account created successfully", "success");
        router.push("/overview");
      }
    } catch (error) {
      notify("An error occurred", "error");
    }
  };

  React.useEffect(() => {
    console.log(user);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(handleCreateAccount)}
      className="h-screen flex"
    >
      {contextHolder}
      <Card className="m-auto max-w-xl w-[100%]">
        <CardHeader>
          <CardTitle className="text-xl">Bio</CardTitle>
          <CardDescription>Tell us a little about yourself</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-3 mb-4">
              <Label htmlFor="role">You are an</Label>
              <Select
                name="role"
                onValueChange={(value) => setValue("role", value)}
              >
                <SelectTrigger id="role" aria-label="Select role">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="institution">Institution</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Short bio</Label>
              <Textarea
                id="bio"
                placeholder="Enter your bio"
                rows={3}
                {...register("bio", { required: true })}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              Create your account
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

export default SignUpUtility;
