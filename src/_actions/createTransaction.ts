"use server";

import { db } from "~/server/db";
import { transactions } from "~/server/db/schema";

export default async function createTransaction({
  userId,
  categoryId,
  title,
  amount,
  description,
  date,
}: {
  userId: string;
  categoryId: number;
  title: string;
  amount: number;
  description: string;
  date: Date;
}) {
  await db.insert(transactions).values({
    userId,
    categoryId,
    title,
    amount,
    description,
    date,
  });
}
