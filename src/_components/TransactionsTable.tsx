import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/_components/ui/table";

import { format } from "date-fns";

export interface Transaction {
  id: number;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt?: Date;
  transactionDate?: Date;
  amount?: number;
}

export interface TransactionsTableProps {
  transactions: Transaction[];
}

export default function TransactionsTable({
  transactions,
}: TransactionsTableProps) {
  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Last updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map(
          ({ title, description, transactionDate, amount, updatedAt }) => (
            <TableRow>
              <TableCell>{title}</TableCell>
              <TableCell>{description}</TableCell>
              <TableCell>
                {transactionDate ? format(transactionDate, "dd-MMM-yyy") : "-"}
              </TableCell>
              <TableCell>{amount ? `$${amount.toFixed(2)}` : "$0.00"}</TableCell>
              <TableCell>
                {updatedAt ? format(updatedAt, "dd-MMM-yyy") : "-"}
              </TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
    </Table>
  );
}
