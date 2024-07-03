"use strict";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "antd";
import { VerifyUser } from "./VerifyUserModal";
import { useState } from "react";

const UsersTable = ({ data }: { data: any }) => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead className="">username</TableHead>
                <TableHead className="">Role</TableHead>
                <TableHead className="">Date Joined</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((user: any, index: number) => (
                <TableRow>
                  <TableCell>
                    <div className="font-medium">{user?.fullName}</div>
                    <div className="text-sm text-muted-foreground md:inline">
                      {user?.email}
                    </div>
                  </TableCell>
                  <TableCell className="">@{user?.username}</TableCell>
                  <TableCell className="">
                    <Badge className="text-xs uppercase" variant="outline">
                      {user?.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="">
                    {user?.createdAt?.split("T")[0]}
                  </TableCell>
                  <TableCell className="text-right">
                    {user?.isVerified ? (
                      <Badge variant="secondary" color="success">
                        Verified
                      </Badge>
                    ) : (
                      <DialogTrigger asChild>
                        <Button
                          size="small"
                          type="primary"
                          onClick={() => setSelectedUser(user)}
                        >
                          VERIFY
                        </Button>
                      </DialogTrigger>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <VerifyUser data={selectedUser} setOpen={setOpen} />
    </Dialog>
  );
};

export default UsersTable;
