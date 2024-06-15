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

const DatasetsTable = () => {
  return (
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
        {sampleDashboardDatasets.map((dataset, index) => (
          <TableRow>
            <TableCell>
              <div className="font-medium">{dataset.name}</div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              {dataset.category}
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" variant="secondary">
                {dataset.status}
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {dataset.size}
            </TableCell>
            <TableCell className="text-right">{dataset.rows}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DatasetsTable;
