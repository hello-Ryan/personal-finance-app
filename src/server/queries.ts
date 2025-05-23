"use server";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { transactions } from "./db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

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

  return transactionsFromDB;
}

export async function getUserSavings() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorised requst");
  }

  const savings = await db.query.savings.findMany({
    where: (x, { eq }) => eq(x.userId, userId),
    orderBy: (x, { desc }) => desc(x.createdAt),
  });

  return savings;
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

export async function updateUserTransaction() {}

export async function deleteUserTransaction(id: number) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorised requst");
  }

  await db.delete(transactions).where(eq(transactions.id, id));
  revalidatePath("/");
}
