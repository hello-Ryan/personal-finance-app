import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import TransactionsTable, {
  Transaction,
} from "~/_components/TransactionsTable";

import { db } from "~/server/db";
import { transactions } from "~/server/db/schema";

export default async function Page() {
  const { userId } = auth();
  type TransactionType = typeof transactions.$inferInsert;

  if (!userId) {
    redirect("/");
  }

  const transactionsFromDB = await db.query.transactions.findMany({
    where: (users, { eq }) => eq(users.userId, userId),
  });

  const transactionsFormated = transactionsFromDB.map(
    ({
      id,
      title,
      description,
      createdAt,
      updatedAt,
      transactionDate,
      amount,
    }) =>
      ({
        id,
        title,
        description,
        createdAt,
        updatedAt,
        transactionDate,
        amount,
      }) as Transaction,
  );
  async function pushDB() {
    "use server";
    await db.insert(transactions).values({
      userId,
      title: "Testing",
      amount: Math.random() * 10,
      description: "Testing description",
    } as TransactionType);
    revalidatePath('/')

  }

  function DBbutton() {
    "use client";
    return <button onClick={pushDB}>PUSH TO DB</button>;
  }

  return (
    <div className="flex min-h-screen w-screen items-center justify-center flex-col gap-2">
      <DBbutton />
      <div className="w-3/4">
      <TransactionsTable transactions={transactionsFormated} />

      </div>
    </div>
  );
}
