"use client";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { sampleDashboardDatasets } from "@/samples/samples";

type Props = {
  datasets: any[],
  setSelectedDataset: any,
}

const DatasetsTable:React.FC<Props> = ({datasets, setSelectedDataset}) => {

  return (
    <>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Dataset</TableHead>
          <TableHead className="hidden sm:table-cell">Category</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">Size</TableHead>
          <TableHead className="text-right">Rows</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {datasets?.map((dataset, index) => (
          <TableRow className="cursor-pointer" onClick={()=>setSelectedDataset(dataset)}>
            <TableCell>
              <div className="font-medium">{dataset.name}</div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              {dataset.domain}
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" variant="secondary">
                {dataset.isApproved ? "Approved" : "Pending"}
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {dataset.fileSize}
            </TableCell>
            <TableCell className="text-right">{dataset.numRows}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    
    </>
  );
};

export default DatasetsTable;
