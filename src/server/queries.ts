import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { transactions } from "./db/schema";
import { Transaction } from "~/_components/TransactionsTable";
import { revalidatePath } from "next/cache";

type TransactionType = typeof transactions.$inferInsert;

export async function getUserTransactions() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorised requst");
  }

  const transactionsFromDB = await db.query.transactions.findMany({
    where: (x, { eq }) => eq(x.userId, userId),
    orderBy: (x, { desc }) => desc(x.transactionDate),
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

  return transactionsFormated;
}

export async function saveUserTransaction({
  title,
  description,
  amount,
  transactionDate,
}: TransactionType) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorised requst");
  }

  await db.insert(transactions).values({
    title,
    description,
    userId,
    amount,
    transactionDate,
  });
  revalidatePath("/");
}

export async function updateUserTransaction(){}
