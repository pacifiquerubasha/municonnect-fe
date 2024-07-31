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
import { Button, Modal } from "antd";
import { VerifyUser } from "./VerifyUserModal";
import { useState } from "react";
import useNotify from "@/hooks/useNotify";
import { banUser } from "@/services/endpoints/users";
import { useUser } from "@clerk/nextjs";

const UsersTable = ({
  data,
  setShouldRefresh,
}: {
  data: any;
  setShouldRefresh: any;
}) => {
  const { user } = useUser();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [modal1Open, setModalOpen] = useState(false);

  const { notify, contextHolder } = useNotify();

  const handleBanUser = async () => {
    try {
      const response = await banUser(selectedUser._id, user?.id as string);
      if (response.status === 200) {
        notify("User has been banned successfully", "success");
        setTimeout(() => {
          setShouldRefresh((prev: boolean) => !prev);
          setModalOpen(false);
        }, 1000);
      }
    } catch (error) {
      notify("An error occured while banning user", "error");
    }
  };

  const handleOpenBanModal = (user: any) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {contextHolder}
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
                    <div className="flex justify-end items-center gap-2">
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

                      {user?.isBanned?.status ? (
                        <Badge variant="secondary" color="error">
                          BANNED
                        </Badge>
                      ) : (
                        <Button onClick={() => handleOpenBanModal(user)}>
                          BAN
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <VerifyUser data={selectedUser} setOpen={setOpen} />
      <Modal
        title="BAN USER"
        open={modal1Open}
        centered
        onOk={handleBanUser}
        onCancel={() => setModalOpen(false)}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <Button onClick={handleBanUser} type="primary" danger>
              BAN
            </Button>
          </>
        )}
      >
        <p>
          Are you sure you want to ban this user? This action is irreversible.
        </p>
      </Modal>
    </Dialog>
  );
};

export default UsersTable;
