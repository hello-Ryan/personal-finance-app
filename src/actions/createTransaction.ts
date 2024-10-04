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
  const success = await db
    .insert(transactions)
    .values({
      userId,
      categoryId,
      title,
      amount,
      description,
      date,
    })
    .returning({ insertedId: transactions.id });
  
  // TODO create constants file for these responses
  if (success[0]) {
    return {
      response: "SUCCESS",
      userId: success[0].insertedId,
    };
  } else {
    return {
      response: "FAIL",
    }
  }
}
