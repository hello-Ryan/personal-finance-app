"use client";

import { ColumnDef } from "@tanstack/react-table";
import { revalidatePath } from "next/cache";
import { FaPencilAlt } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import { deleteUserTransaction } from "~/server/queries";

export type Transaction = {
  id: number;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt?: Date;
  transactionDate?: Date;
  amount?: number;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "transactionDate",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("transactionDate"));
      const formatted = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(date);
      return <div className="text-left">{formatted}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Last updated",
    cell: ({ row }) => {
      const date = new Date(row.getValue("transactionDate"));
      const formatted = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(date);
      return (
        <div className="text-left font-light text-opacity-40">{formatted}</div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-4">
          {/* TODO: create edit functionality */}
          <button className="text-lg text-gray-400">{<FaPencilAlt />}</button>
          <button className="text-lg text-gray-400" onClick={() => {
            deleteUserTransaction(row.original.id);
          }}>
            {<IoTrashBinOutline />}
          </button>
        </div>
      );
    },
  },
];
