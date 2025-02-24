import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getUserTransactions, saveUserTransaction } from "~/server/queries";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { transactions } from "~/server/db/schema";

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
    <div className="h-full w-full grid grid-flow-row grid-cols-1 grid-rows-2 gap-5">
      <div>
        <div className="grid grid-cols-2 grid-rows-1 h-full gap-5"> 
            <div className="border border-gray-300 rounded-md p-2">
                Graph
            </div>
            <div className="border border-gray-300 rounded-md p-2">
              Pie chart
            </div>
        </div>
      </div>
      <div className="container mx-auto">
      <DBbutton />

        <DataTable columns={columns} data={transactionsResponse} />
      </div>
    </div>
  );
}
