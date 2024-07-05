"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import useNotify from "@/hooks/useNotify";
import { AppContext } from "@/providers/ContextProvider";

import { sampleDashboardDatasets } from "@/samples/samples";
import { switchDatasetStatus } from "@/services/endpoints/datasets";
import { useUser } from "@clerk/nextjs";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useContext, useState } from "react";

type Props = {
  datasets: any[];
  setSelectedDataset: any;
  setShouldRefresh?: any;
};

const DatasetsTable: React.FC<Props> = ({
  datasets,
  setSelectedDataset,
  setShouldRefresh,
}) => {
  const { currentUser } = useContext(AppContext);
  const [open, setOpen] = useState<boolean>(false);
  const [reasonForRemoval, setReasonForRemoval] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { notify, contextHolder } = useNotify();

  const [dataset, setDataset] = useState<any>(null);

  const handleSwitchStatus = async () => {
    setIsSubmitting(true);
    try {
      const response = await switchDatasetStatus(
        currentUser?.authId as string,
        dataset._id,
        reasonForRemoval
      );
      if (response.data) {
        console.log(response.data);
        setShouldRefresh((prev: boolean) => !prev);
        notify("Dataset status updated successfully", "success");
      }
    } catch (error) {
      console.error(error);
      notify("An error occurred while updating dataset status", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        {contextHolder}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Dataset</TableHead>
              <TableHead className="hidden sm:table-cell">Category</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Size</TableHead>
              <TableHead className="text-right">Rows</TableHead>
              <TableHead className="hidden sm:table-cell">Visibility</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {datasets?.map((dataset, index) => (
              <TableRow
                className="cursor-pointer"
                onClick={() => setSelectedDataset(dataset)}
              >
                <TableCell>
                  <div className="font-medium">{dataset.name}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {dataset.domain}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    {dataset.isPrivate ? "Private" : "Public"}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {dataset.fileSize}
                </TableCell>
                <TableCell className="text-right">{dataset.numRows}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  {currentUser?.role === "admin" ? (
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="h-7 gap-1"
                        onClick={() => setDataset(dataset)}
                      >
                        {dataset.isApproved ? "Approved" : "Pending"}
                      </Button>
                    </DialogTrigger>
                  ) : (
                    <Badge className="text-xs" variant="secondary">
                      {dataset.isApproved ? "Approved" : "Pending"}
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {!dataset?.isApproved ? "Approve Dataset" : "Remove Dataset"}
            </DialogTitle>
            <DialogDescription className="pt-4">
              {!dataset?.isApproved ? (
                "Are you sure you want to approve this dataset?"
              ) : (
                <div className="grid w-full max-w-sm lg:max-w-full items-center gap-1.5">
                  <Label htmlFor="reasonForRemoval">
                    Provide a reason for removal
                  </Label>
                  <Textarea
                    id="reasonForRemoval"
                    rows={3}
                    placeholder="Reason"
                    onChange={(e) => setReasonForRemoval(e.target.value)}
                    required
                  />
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="submit"
              onClick={handleSwitchStatus}
              disabled={isSubmitting}
            >
              {isSubmitting && <ReloadIcon />}
              Proceed
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DatasetsTable;
