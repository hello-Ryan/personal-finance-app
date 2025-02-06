import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { transactions } from "./db/schema";

export async function getUserTransactions() {
  const user = auth();

  if (!user.userId) {
    throw new Error("Unauthorised requst");
  }

  const transactions = await db.query.transactions.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.transactionDate),
  });

  return transactions;
}

export async function saveUserTransaction(
  title: string,
  amount: number,
  transactionDate: Date,
) {
  const user = auth();

  if (!user.userId) {
    throw new Error("Unauthorised requst");
  }

  await db.insert(transactions).values({
    title,
    userId: user.userId,
    amount,
    transactionDate,
  });
}
