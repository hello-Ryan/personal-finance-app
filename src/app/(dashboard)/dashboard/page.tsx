import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import TransactionsTable, {
  Transaction,
} from "~/_components/TransactionsTable";

import { transactions } from "~/server/db/schema";
import { getUserTransactions, saveUserTransaction } from "~/server/queries";

export default async function Page() {
  const { userId } = await auth();

  type TransactionType = typeof transactions.$inferInsert;

  if (!userId) {
    redirect("/");
  }

  const transactionsResponse = await getUserTransactions();

  function DBbutton() {
    "use client";
    return (
      <button
        onClick={async () => {
          "use server";
          await saveUserTransaction({
            title: "Testing",
            description: "Testing description",
            amount: Math.random() * 10,
            transactionDate: new Date(),
          } as TransactionType);

          revalidatePath("/");
        }}
      >
        PUSH TO DB
      </button>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <DBbutton />
      <div className="w-3/4">
        <TransactionsTable transactions={transactionsResponse} />
      </div>
    </div>
  );
}
