import { Button } from "~/components/ui/button";
import { HistoryWidget } from "../_components";
import { AddTransaction } from "../_components/Widgets/AddTransaction";
import { db } from "~/server/db";
import { transactions } from "~/server/db/schema";
import createTransaction from "../../actions/createTransaction";
import Test from "../_components/test";

export default async function HomePage() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center gap-2">
      <p className="text-2xl font-semibold text-white">Transaction modal</p>
      <Test />
    </div>
  );
}
