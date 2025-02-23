import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import TransactionsTable, {
  Transaction,
} from "~/_components/TransactionsTable";

import { db } from "~/server/db";
import { transactions } from "~/server/db/schema";
import { getUserTransactions, saveUserTransaction } from "~/server/queries";

export default async function Page() {
  const { userId } = auth();

  type TransactionType = typeof transactions.$inferInsert;

  if (!userId) {
    redirect("/");
  }

  const transactionsResponse = await getUserTransactions();

  async function pushDB() {
    "use server";
    await saveUserTransaction({
      title: "Testing",
      description: "Testing description",
      amount: Math.random() * 10,
      transactionDate: new Date(),
    } as TransactionType);

    revalidatePath("/");
  }

  function DBbutton() {
    "use client";
    return <button onClick={pushDB}>PUSH TO DB</button>;
  }

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-2">
      <DBbutton />
      <div className="w-3/4">
        <TransactionsTable transactions={transactionsResponse} />
      </div>
    </div>
  );
}
